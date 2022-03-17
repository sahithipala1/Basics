// Get Request
function getTodos(){
    axios({
        method: "get",
        url:'https://www.freecodecamp.org/learn/data-analysis-with-python/',
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err));

}
function addTodo(){
    axios({
        method: "get",
        url:'https://jsonplaceholder.typicode.com/todos?_limit=5',
        data:{
            title: "New Todo",
            completed: false
        }
    })
        .then(res => showOutput(res))
        .catch(err => console.error(err));

}



// Show output in browser
function showOutput(res) {
    document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);