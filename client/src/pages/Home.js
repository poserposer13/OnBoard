// import { Form } from 'react-bootstrap';
import React from 'react';

class Home extends React.Component {
//   Post = (e) => {
//       e.preventDefault();
//       const file = document.getElementById('inputGroupFile01').files;
//       const formData = new FormData();

    //       formData.append('img', file[0]);

    //       fetch('/file', {
    //           method: 'POST',
    //           body: formData,
    //       }).then(res => res.json())
    //           .then((res) => {
    //               console.log(res);
    //               document
    //                   .getElementById('img')
    //                   .setAttribute('src', `/file/${res.filename}`);
    //               console.log(file[0]);
    //           });
    //   };

    render() {
        return (
            <div>
                <h2>Home Page</h2>
                <p>Welcome Home</p>
            </div>
        );
    }
}

export default Home;
