export default function Loading() {
  //create loading ui using react boostrap
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading....</span>
      </div>
    </div>
  );
}
