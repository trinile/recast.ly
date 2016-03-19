var Nav = (props) => {
  
  return (  
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search whenUserSearched={props.onUserSearch}/>
      </div>
    </nav>
  );
};

window.Nav = Nav;
