// A closure indicates that the internal function has access to the context of the external function.
// A local variable defined in a scope is terminated 
// the external function does not disappear until the internal function using the regional variable of the external function disappears.
function movieFactory() {
  const title = "Matrix";
  return () => {
    console.log(title);
  };
}

const movie = movieFactory();
movie();

function movieFactoryV2(initialTitle) {
  let title = initialTitle;

  return {
    setTitle: (_title) => {
      title = _title;
    },
    getTitle: () => {
      return title;
    },
  };
}

const movie2 = movieFactoryV2("Iron Man");

console.log(movie2.getTitle());

movie2.setTitle("Dr.Stranger");
console.log(movie2.getTitle());
