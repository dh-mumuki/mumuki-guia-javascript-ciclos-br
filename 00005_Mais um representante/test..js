describe("A função passandoPor()", function() {
  it("deve imprimir 'aqui eu tenho o valor de 0', 'aqui eu tenho o valor de 1', 'aqui eu tenho o valor de 2', 'aqui eu tenho o valor de 3'", function() {
	passandoPor();
	assert.equal(console.toString(), "aqui eu tenho o valor de 0\naqui i tem o valor de 1\naqui i tem o valor de 2\naqui i tem o valor de 3")
  });
})
