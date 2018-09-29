describe("Imprimir passandoPelosPares()", function() {
  it("deve imprimir 'aqui eu tenho o valor de 0','aqui eu tenho o valor de 2','aqui eu tenho o valor de 4','aqui eu tenho o valor de 6'", function() {
	passandoPelosPares();
	assert.equal(console.toString(), "aqui eu tenho o valor de 0\naqui eu tenho o valor de 2\naqui eu tenho o valor de 4\naqui eu tenho o valor de 6\n")
  });
})
