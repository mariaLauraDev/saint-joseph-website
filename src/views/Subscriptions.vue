<template>
  <div class="form-container">
    <h1>FORMULÁRIO DE INSCRIÇÃO</h1>
    <p> A catequese de iniciação à vida cristã está com inscrições abertas em nossa comunidade. Se você é um jovem com idade entre 14 a 21 anos, venha fazer parte do nosso grupo!</p>
    <form @submit="createPerson">
      <fieldset>
        <legend>Sobre o Catequizando</legend>
        <label for="c-name"><span class="line-left"></span> Nome completo <input id="c-name" name="c-name" type="text" required /></label>
        <label for="date-birth"><span class="line-left"></span> Data de nascimento <input id="date-birth" name="date-birth" type="date" required /></label>
        <label for="place-birth"><span class="line-left"></span> Naturalidade <input id="place-birth" name="place-birth" type="text" required /></label>
        <label for="federative"><span class="line-left"></span> Unidade Federativa 
        <select id="federative" name="federative" v-model="federative" required>
            <option value=""> Selecione a UF</option>
            <option v-for="federative in federatives" :key="federative.id" value="federative.abbreviation"> 
              {{federative.abbreviation}} </option>
        </select>
        </label>
        <label for="address"><span class="line-left"></span> Endereço <input id="address" name="address" type="text" required /></label>
        <label for="c-phone-number"><span class="line-left"></span> Telefone para contato <input id="c-phone-number" name="c-phone-number" type="tel" required /></label>
        <label for="sacraments">
          <span class="line-left"></span> Sacramentos que já recebeu <div></div>
          <input id="sacraments" class="inline" type="checkbox" name="sacraments-baptism" value="option"> Batismo
          <input id="sacraments" class="inline" type="checkbox" name="sacraments-reconciliation" value="option"> Confissão ou Reconciliação 
          <input id="sacraments" class="inline" type="checkbox" name="sacraments-eucharist" value="option"> Eucaristia
        </label>
        <label for="referrer"><span class="line-left"></span> Como conheceu a Catequese?
          <select id="referrer" name="referrer">
            <option value="">(select one)</option>
            <option value="1">Divulgação nas missas</option>
            <option value="2">Instagram</option>
            <option value="3">WhatsApp</option>
            <option value="4">Um familiar/amigo indicou</option>
            <option value="5">Outro</option>
          </select>
        </label>
      </fieldset>
      <fieldset>
        <legend>Sobre os pais/responsáveis</legend>
        <label for="r-name"><span class="line-left"></span> Nome completo <input id="r-name" name="r-name" type="text" required /></label>
        <label for="r-phone-number"><span class="line-left"></span> Telefone para contato <input id="r-phone-number" name="r-phone-number" type="tel" required /></label>
      </fieldset>

      <input type="submit" class="submit-btn" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Subscriptions',
  data(){
    return{
      federatives: null
    }
  },
  methods: {
    async getFederative(){
      const req = await fetch('http://localhost:3000/federatives');
      const data = await req.json();
      this.federatives = data.federatives;
    },

  },
  mounted(){
    this.getFederative()
  }
}
</script>

<style scoped>

@media (max-width: 827px){
.form-container {
  width: 60%;
  margin: 30px auto;
}}

@media (max-width: 768px) {
  /* For mobile phones: */
.form-container {
  width: 100%;
  margin: 5px auto;
  }
}

h1{
  text-align: center;
  width: 70%;
  margin: 30px auto;
}

p{
    text-align: center;
    width: 70%;
    margin: 30px auto;
}

form {
  width: 70%;
  margin: 0 auto;
  padding-bottom: 2em;
}

fieldset {
  border: none;
  padding: 2rem 0;
  border-bottom: 2px;
}

fieldset legend{
  font-size: 18pt;
  border-bottom: 2px solid #008037;
  font-weight:600;
}

.line-left{
  border-left: 2px solid #008037;
  padding: 0 2px;
}
label {
  display: block;
  margin: 0.5rem 0;
  padding: 5px 10px;
}

input,
textarea,
select {
  margin: 10px 0 0 0;
  width: 100%;
  min-height: 2em;
}

input, select option {
  border: 1px solid;
  border-radius: 50px #008037;

}

.inline {
  width: unset;
  margin: 0 0.5em 0 0;
  vertical-align: middle;
}

.space{
  margin-bottom: 2px ;
}

.submit-btn {
  display: block;
  width: 60%;
  background-color: #008037;
  color: #FFF;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: .5s;
}

.submit-btn:hover{
  background-color: transparent;
  color: #222;
}
</style>