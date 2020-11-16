import { expect } from 'chai';

function SuperTestDefaultOptions()
{
    expect(30).to.equal(30); 
    expect(30).to.not.equal(22); 
}

function SuperTestSuite(this: Mocha.Suite)
{
    it("Validate Special Functions", SuperTestDefaultOptions);
}

describe('User Tests', SuperTestSuite);
