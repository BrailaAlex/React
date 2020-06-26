import React from "react";
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component{
  state = {
    currentPage: 0,
    itemsPerPage: 3
  };
  
  getPrevPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
  })
  };

  getNextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
    // debugger;
  };

  render() {
    const totalitems = this.props.users.length;
    const usersList = this.props.users
    const firstIndex = this.state.currentPage * this.state.itemsPerPage;
    const lastindex = firstIndex + this.state.itemsPerPage;
    let currentPageList = usersList
      .slice(firstIndex, lastindex);
    // debugger;
    if (currentPageList.length !== 0) {
      return (
        <div>
          <Pagination goPrev={this.getPrevPage}
            goNext={this.getNextPage}
            totalitems={totalitems}
            currentPage={this.state.currentPage}
            itemsPerPage={this.state.itemsPerPage}
          />
          <ul className="users">
            {currentPageList.map(
              user =>
            <User key={user.id}  {...user}
              />
            )}
          </ul>
        </div>
        )
    } 
 
  }
  
}
export default UsersList;