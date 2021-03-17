let chai = require("chai");
let chaihttp = require("chai-http");
let server = require("../app");

//Assertion Style

chai.should()

chai.use(chaihttp);

describe("Teacher Api", () => {

    //Test Create
    describe("CREATE Teacher", () => {
        it("It should create a new Teacher", (done) => {
            const testTeacher = {
                first_name: "Test",
                last_name: "Passes",
                age: 23
            }
            chai.request(server)
                .post("/teacher")
                .send(testTeacher)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message');
                    response.body.should.have.property('data');
                    done();
                })
        })
    })


    // Test Get
    describe("GET teacher", () => {
        it("It should get all teachers", (done) => {
            chai.request(server)
                .get("/teacher")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('message');
                    response.body.should.have.property('data');
                    done();
                })
        })
    })
    // Test create
})