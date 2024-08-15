

export const addUser = (request, response) => {
    //console.log("hello")
    const user = request.body;
    //but node.js does not handle post api body sent from front end whihc can be solved by body-parser

    console.log(user);
}