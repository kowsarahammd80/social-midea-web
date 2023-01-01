import React, { useContext, useState } from "react";
import moment from "moment/moment";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./StatusPostModal.css";

const StatusPostModal = () => {
  const { user } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_image_key;

  const [modal, setModal] = useState(true);

  const handlePOst = () => {
    setModal(false);
  };

  const handleStatusPost = (event) => {
    const postTime = moment().format("lll");
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    console.log(text);

    // console.log(photo)
    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const image = imageData.data.display_url;
        console.log(image);
        userStatusPhoto(
          text,
          image,
          user.email,
          user.displayName,
          user.photoURL,
          postTime
        );
        form.reset("");
      });
  };

  const userStatusPhoto = (
    text,
    image,
    email,
    displayName,
    photoURL,
    postTime
  ) => {
    const statusWithPhoto = {
      text: text,
      image: image,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
      postTime: postTime,
    };

    fetch(`http://localhost:5000/statusPhoto`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(statusWithPhoto),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            for="my-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleStatusPost}>
            <div className="mb-4 p-2">
              <input
                type="text"
                name="text"
                placeholder="Shear your text"
                className="input w-full max-w-lg focus:border-none border-none"
              />
            </div>

            <label htmlFor="photo" className="flex justify-center">
              <i class="fa-solid fa-arrow-up-from-bracket upload-image"></i>
            </label>

            <input
              type="file"
              id="photo"
              name="image"
              className="w-0  border-none"
            />

            <div className="modal-action">
              <button type="submit" className="btn bg-lime-500">
                Post
              </button>

              <label htmlFor="my-modal" className="btn bg-red-600">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StatusPostModal;
