describe('First test',()=> {
    beforeEach(async () => {
        
        await device.launchApp( );
      });
    it('should find the send button and tap it', async ()=> {
        await element(by.id('sendButton')).tap();
    })
})