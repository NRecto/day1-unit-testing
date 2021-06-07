const chai = require("chai");
const expect = chai.expect;

const http = require("chai-http");
chai.use(http);

describe( "api_test_suite", () => {
    it("test_api_get_home_is_running", () => {
        chai
          .request("http://localhost:5001")
          .get("/")
          .end((err, res) => {
            expect(res).to.not.equal(undefined);
          });
      });
})
