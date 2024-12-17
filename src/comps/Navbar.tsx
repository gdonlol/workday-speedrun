
export const Navbar = (props: { name: string }) => {
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/walmart_logo_icon_170230.png" />
        <b style={{ fontSize: 20 }}>Careers</b>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", gap: 16 }}>
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", alignItems: "center" }}>
          <small>Made by Gordon</small>
          <small>|</small>
          <a href='https://github.com/'> <i className='fa fa-github' /> <small>Github Repo</small></a></div>
        <div style={{ display: "flex", gap: 32, justifyContent: "flex-end" }}>
          <b style={{ margin: 0, fontSize: 14 }}>Search for Jobs</b>
        </div>
      </div>
    </div>
  )
}
