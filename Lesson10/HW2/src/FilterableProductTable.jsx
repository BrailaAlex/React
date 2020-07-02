import React from "react";
import SearchBar from "./SearchBar.jsx";
import ProductTable from "./ProductTable.jsx";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  render() {
    const {filterText, inStockOnly} = this.state

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={this.props.products} />
      </div>
    );
  }
};
export default FilterableProductTable;