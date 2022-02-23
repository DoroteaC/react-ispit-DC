// import "./Repository.css";
function Repository({ repository }) {
  return repository != undefined ? (
    <div className="">
      <div id="userInfo" className="w-full">
        <span>{repository.name}</span>
      </div>
    </div>
  ) : (
    <div></div> //ako nije definirano - popuni 
  );
}
export default Repository;
