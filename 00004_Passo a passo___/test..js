describe("Imprimir passoAPasso()", function() {
  it("deveria imprimir 01234", function() {
	passoAPasso();
	assert.equal(console.toString(), "0\n1\n2\n3\n4\n")
  });
})
