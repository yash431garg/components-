import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="App">
      <Card
        img={
          "https://www.viewbug.com/media/mediafiles/2016/04/30/65766312_large1300.jpg"
        }
      />
      <Card img="https://innovationorigins.com/app/uploads/2018/10/20130523_180620-1-1004x631.jpg" />
      <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7MWzTQxC5tk_cWlpixi3j1ub0jM7SgbrdFW2iWpz-cfbfB7bVv0zIupljr1R6Q8YDkc&usqp=CAU" />
    </div>
  );
}

export default App;
