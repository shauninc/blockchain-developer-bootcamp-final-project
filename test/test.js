const FileStorage = artifacts.require('./FileStorage.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('FileStorage', ([deployer, uploader]) => {
  let filestorage

  before(async () => {
    filestorage = await FileStorage.deployed()
  })
// Checks if the contract deploys successfully and if it has a name 
  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await filestorage.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await filestorage.name()
      assert.equal(name, 'FileStorage')
    })
  })



// check for an owner 
  describe('owner', async () => {
    it('has an owner', async () => {
      const owner = await filestorage.address
      const address = await filestorage.address
      assert.equal(address, owner)
    })
  })
  

  describe('file', async () => {
    let result, fileCount
    const fileHash = 'QmV8cfu6n4NT5xRr2AHdKxFMTZEJrA44qgrBCr739BN9Wb'
    const fileSize = '1'
    const fileType = 'TypeOfTheFile'
    const fileName = 'NameOfTheFile'
    const fileDescription = 'DescriptionOfTheFile'

    before(async () => {
      result = await filestorage.uploadFile(fileHash, fileSize, fileType, fileName, fileDescription, { from: uploader })
      fileCount = await filestorage.fileCount()
    })

    //checks if file uploads 
    it('upload file', async () => {
      // SUCESS
      assert.equal(fileCount, 1)
      const event = result.logs[0].args
      assert.equal(event.fileId.toNumber(), fileCount.toNumber(), 'Id is correct')
      assert.equal(event.fileHash, fileHash, 'Hash is correct')
      assert.equal(event.fileSize, fileSize, 'Size is correct')
      assert.equal(event.fileType, fileType, 'Type is correct')
      assert.equal(event.fileName, fileName, 'Name is correct')
      assert.equal(event.fileDescription, fileDescription, 'Description is correct')

      // FAILURE: File must have hash
      await filestorage.uploadFile('', fileSize, fileType, fileName, fileDescription, { from: uploader }).should.be.rejected;
      
      // FAILURE: File must have size
      await filestorage.uploadFile(fileHash, '', fileType, fileName, fileDescription, { from: uploader }).should.be.rejected;
      
      // FAILURE: File must have type
      await filestorage.uploadFile(fileHash, fileSize, '', fileName, fileDescription, { from: uploader }).should.be.rejected;

      // FAILURE: File must have name
      await filestorage.uploadFile(fileHash, fileSize, fileType, '', fileDescription, { from: uploader }).should.be.rejected;

      // FAILURE: File must have description
      await filestorage.uploadFile(fileHash, fileSize, fileType, fileName, '', { from: uploader }).should.be.rejected;
    })

    //checks if files list 
    it('lists file', async () => {
      const file = await filestorage.files(fileCount)
      assert.equal(file.fileId.toNumber(), fileCount.toNumber(), 'id is correct')
      assert.equal(file.fileHash, fileHash, 'Hash is correct')
      assert.equal(file.fileSize, fileSize, 'Size is correct')
      assert.equal(file.fileName, fileName, 'Size is correct')
      assert.equal(file.fileDescription, fileDescription, 'description is correct')
    })
  })
})