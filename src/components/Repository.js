// import "./Repository.css";
function Repository({ repository }) {
  return repository != undefined ? (
    <div className="">
      <div id="userInfo" className="w-full">
        <div className="rounded-full bg-sky-50">{repository.name}</div>
      </div>
    </div>
  ) : (
    <div></div> //ako nije definirano - popuni 
  );
}
export default Repository;
