function Jumbotron() {
  return (
    <div className="container py-5 text-center">

      <i className="bi bi-bootstrap-fill fs-1 text-primary"></i>

      <h1 className="fw-bold mt-3">
        Jumbotron with icon
      </h1>

      <p className="text-muted col-lg-6 mx-auto">
        This is a custom jumbotron featuring an icon,
        some longer text that wraps early thanks to
        responsive classes.
      </p>

      <button className="btn btn-primary me-2">
        Call to action →
      </button>

      <button className="btn btn-outline-secondary">
        Secondary link
      </button>

    </div>
  )
}

export default Jumbotron