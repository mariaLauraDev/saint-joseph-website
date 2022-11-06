<template>
  <div class="form-container">
    <h2>FORMULÁRIO DE INSCRIÇÃO</h2>
    <p> A catequese de iniciação à vida cristã está com inscrições abertas em nossa comunidade. Se você é um jovem com idade entre 14 a 21 anos, venha fazer parte do nosso grupo!</p>
    <form @submit="createSubscription">
      <fieldset>
        <legend>Sobre o Catequizando</legend>
        
        <label for="c_name"><span class="line-left"></span> Nome completo
        <input id="c_name" name="c_name" type="text" required />
        </label>

        <label for="date_birth"><span class="line-left"></span> Data de nascimento 
        <input id="date_birth" name="date_birth" type="date" required />
        </label>

        <label for="place_birth"><span class="line-left"></span> Naturalidade 
        <input id="place_birth" name="place_birth" type="text" required />
        </label>

        <label for="federative"><span class="line-left"></span> Unidade Federativa 
        <select id="federative" name="federative" >
            <option value=""> Selecione a UF</option>
            <option v-for="(unit) in units" :key="unit.id" value="unit.abbr"> 
              {{unit.abbr}} </option>
        </select>
        </label>

        <label for="address"><span class="line-left"></span> Endereço 
        <input id="address" name="address" type="text" required />
        </label>

        <label for="c_phone_number"><span class="line-left"></span> Telefone para contato 
        <input id="c_phone_number" name="c_phone_number" type="tel" required />
        </label>

        <label for="sacraments">
          <span class="line-left"></span> Sacramentos que já recebeu <div></div>
          <input id="sacraments" class="inline" type="checkbox" name="sacraments-baptism" value="option"> Batismo
          <input id="sacraments" class="inline" type="checkbox" name="sacraments-reconciliation" value="option"> Confissão ou Reconciliação 
          <input id="sacraments" class="inline" type="checkbox" name="sacraments-eucharist" value="option"> Eucaristia
        </label>

        <label for="referrer"><span class="line-left"></span> Como conheceu a Catequese?
          <select id="referrer" name="referrer">
            <option value="">(Selecione um)</option>
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

        <label for="r_name"><span class="line-left"></span> Nome completo 
        <input id="r_name" name="r_name" type="text" required />
        </label>

        <label for="r_phone_number"><span class="line-left"></span> Telefone para contato 
        <input id="r_phone_number" name="r_phone_number" type="tel" required />
        </label>

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
      units: null,
      c_name: null,
      date_birth: null,
      place_birth: null,
      unit: null,
      address: null,
      c_phone_number: null,
      sacraments: [],
      referrer: null,
      r_name: null,
      r_phone_number: null,
      msg: null
    }
  },
  methods: {
    async getFederative(){
      const req = await fetch ('http://localhost:3000/federatives');
      const data = await req.json();
      this.units = data.units;
    },
    async createSubscription(e){
      e.preventDefault();
      const data = {
        c_name: this.c_name,
        date_birth: this.date_birth,
        place_birth: this.place_birth,
        unit: this.unit,
        address: this.address,
        c_phone_number: this.c_phone_number,
        sacraments: Array.from(this.sacraments),
        referrer: this.referrer,
        r_name: this.r_name,
        r_phone_number: this.r_phone_number,
      }

      const dataJson = JSON.stringify(data);

      const req = await fetch('http://localhost:3000/subscriptions',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: dataJson
      });

      const res = await req.json();

      this.msg ='Inscrição realizada com sucesso!';

      this.c_name ="";
      this.date_birth="";
      this.place_birth="";
      this.unit="";
      this.address="";
      this.c_phone_number="";
      this.sacraments="";
      this.referrer="";
      this.r_name="";
      this.r_phone_number="";
    }

  },
  mounted(){
    this.getFederative()
  }
}
</script>

<style scoped>

h2 {
  font-family: 'Old Standard TT', serif;
  font-size: 40px;
  margin: 30px auto;
  text-align: center;
}

@media (max-width: 827px){
.form-container {
  width: 60%;
  margin: 30px auto;
}
h2{
  font-size: 32px;
}
p{
  font-size: 16px;
}

}

@media (max-width: 768px) {

.form-container {
  width: 100%;
  margin: 5px auto;
  }
}


p{
    text-align: center;
    width: 60%;
    margin: 30px auto;
}

form {
  width: 60%;
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
  border-bottom: 3px solid var(--fiveth-color);
  font-weight:600;
}

.line-left{
  border-left: 2px solid var(--fiveth-color);
  padding: 0 2px;
}
label {
  display: block;
  margin: 0.5rem 0;
  padding: 5px 10px;
}

input,
select, option {
  margin: 10px 0 0 0;
  width: 100%;
  min-height: 2em;
}

input, select option {
  border: 1px solid;
  border-radius: 50px var(--fiveth-color);

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
  background-color: var(--fiveth-color);
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