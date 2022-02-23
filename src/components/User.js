import "./User.css";
import Repository from "./Repository";
function User({ profile, repositories }) {
  return profile != undefined ? (
    <div className="user-container d-flex bg-sky-50 mt-2 border-15 py-20 px-10">
      <div id="userInfo" className="d-flex-col-cc w-30">
        <img src={profile.avatar_url} alt="" className="rounded-full h-20 " />
        <h1>{profile.name}</h1>
        <span className="text-center">{profile.location}</span>
        <span>{profile.bio}</span>
      </div>
      <div id="userRepo" className="d-flex-col-cc width-70">
        {repositories != undefined ? (
          <ul>
            {repositories.map((repo) => (
              <li key={repo.id}>
                <Repository repository={repo} />
              </li>
            ))}
          </ul>
        ) : (
          <div></div>
         
        )}
      </div>
    </div>
  ) : (
    <div>
            
    </div> 
  );
}
export default User;
