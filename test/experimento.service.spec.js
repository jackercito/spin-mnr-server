const chai = require('chai')
const expect = chai.expect
const envPath = __dirname + "/../bin/.env"

require('dotenv').config({ path: envPath })
require('./helper.spec')

const experimentoService = require("../services/experimento.service");

describe("#EXP_SER_D1# Test experimentos Controller ...", () => {
    describe("#EXP_SER_D1_D1# ... sobre la funcion getExperimentos() ...",  () => {
        it("#EXP_SER_D1_D1# ... cuando se invoca ...", async () => {
            const result = await experimentoService.getExperimentos({});
            expect(result).to.be.an('array').and.not.to.be.empty;
        })
    })
})