describe("A função passandoPor()", function() {
  it("deve imprimir 'aqui i tem o valor de 0', 'aqui i tem o valor de 1', 'aqui i tem o valor de 2', 'aqui i tem o valor de 3'", function() {
	passandoPor();
	assert.equal(console.toString(), "aqui i tem o valor de 0\naqui i tem o valor de 1\naqui i tem o valor de 2\naqui i tem o valor de 3")
  });
})
