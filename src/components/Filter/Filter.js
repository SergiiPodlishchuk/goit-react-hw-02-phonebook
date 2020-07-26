<div>
  Find contacts by name or number
  <input
    type="text"
    value={this.state.filter}
    onChange={(e) => this.onChangeFilter(e.target.value)}
  />
</div>;
