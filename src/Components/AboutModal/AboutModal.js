import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AboutModal = () => {
  const { user } = useContext(AuthContext);

  const handleAbout = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const university = form.university.value;
    const address = form.address.value;
    const bio = form.bio.value;
    const bathDate = form.bathDate.value;

    // console.log(location, university, address, bio, bathDate)

    const userAbout = {
      location: location,
      university: university,
      address: address,
      bio: bio,
      bathDate: bathDate,
    };

    fetch(`http://localhost:5000/userabout/${user?.email}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userAbout),
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
      <input type="checkbox" id="my-modal1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h1 className="text-center font-semibold mb-3">Set Your About</h1>

          <form onSubmit={handleAbout}>
            <input
              type="text"
              placeholder="Location"
              name="location"
              className="input input-bordered m-2"
            />

            <input
              type="text"
              placeholder="University"
              name="university"
              className="input input-bordered m-2"
            />

            <input
              type="text"
              placeholder="Address"
              name="address"
              className="input input-bordered m-2"
            />

            <input
              type="text"
              placeholder="Bio"
              name="bio"
              className="input input-bordered m-2"
            />

            <input
              type="text"
              placeholder="Date Of Bath 30/12/2022"
              name="bathDate"
              className="input input-bordered m-2"
            />

            <div className="modal-action">
              <button type="submit" className="btn bg-lime-500">
                Update
              </button>

              <label htmlFor="my-modal1" className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
