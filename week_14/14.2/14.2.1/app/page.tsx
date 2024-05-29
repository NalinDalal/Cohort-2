import axios from "axios";
//function described
async function getUserData() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details",
  );
  return response.data;
}

export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div>
      <div>
        hi there(normally)
        <br />
        {userDetails.email}
        <br />
        {userDetails.name}
      </div>
      ,
      <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
          <div className="border p-8 rounded">
            (prettify it i.e. with tailwind)
            <div>Name: {userDetails?.name}</div>
            {userDetails?.email}
          </div>
        </div>
      </div>
    </div>
  );
}
