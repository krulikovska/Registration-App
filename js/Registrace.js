
class Registrace {
	
    constructor(jazyk = "cs-CZ") {
    	const pojistenciZeStorage = localStorage.getItem("pojistenci");
        this._pojistenci = pojistenciZeStorage ? JSON.parse(pojistenciZeStorage) : [];
    	this._jazyk = jazyk;
		this._jmenoInput = document.getElementById("jmeno");
    	this._prijmeniInput = document.getElementById("prijmeni");
		this._datumNarozeniInput = document.getElementById("datumNarozeni");
		this._adresaInput = document.getElementById("adresa");
		this._emailInput = document.getElementById("email");
		this._telefonInput = document.getElementById("telefon");
		
    	this._registrovatButton = document.getElementById("registrovat");
		  	
    	
    	this._registruj();

    }

	get pojistenci(){
		return this._pojistenci;
	}

	get jmenoInput() {
		return this._jmenoInput;
	}

	get prijmeniInput() {
		return this._prijmeniInput;
	}

	get datumNarozeniInput() {
		return this._datumNarozeniInput;
	}

	get adresaInput() {
		return this._adresaInput;
	}

	get emailInput() {
		return this._emailInput;
	}

	get telefonInput() {
		return this._telefonInput;
	}

	get registrovatButton() {
		return this._registrovatButton;
	}

	get pojistenci() {
		return this._pojistenci;
	}

	_registruj() {
		
		
		this.registrovatButton.onclick = () => { 
			
			
			if ( this.jmenoInput.value.length !== 0 && this.prijmeniInput.value.length !== 0 && this.datumNarozeniInput.value.length !== 0 && this.adresaInput.value.length !== 0 
				&& this.emailInput.value.length !== 0) 
				{
				const pojistenec = new Pojistenec(this.jmenoInput.value, this.prijmeniInput.value, this.datumNarozeniInput.value, this.adresaInput.value, this.emailInput.value,
					this.telefonInput.value);
					
				this.pojistenci.push(pojistenec);
				this.pojistenec = pojistenec;
				
				this.ulozPojistence(this.pojistenci);
				
				this.vypisPojistence(this.pojistenec.jmeno, this.pojistenec.prijmeni, this.pojistenec.datumNarozeni, this.pojistenec.adresa, this.pojistenec.email, this.pojistenec.telefon);
				
			} 
						
			  else {
				alert("Musíte vyplnit všechny údaje ve správném formátu!");}
		  }
			
		};

	vypisPojistence(noveJmeno, novePrijmeni, noveDatumNarozeni, novaAdresa, novyEmail, novyTelefon) {
	
			const table = document.getElementById("tbody");
			
			const newRow = table.insertRow();
			const cell1 = newRow.insertCell(0);
			const cell2 = newRow.insertCell(1);
			const cell3 = newRow.insertCell(2);
			const cell4 = newRow.insertCell(3);
			const cell5 = newRow.insertCell(4);
			const cell6 = newRow.insertCell(5);
			cell1.innerHTML = noveJmeno;
			cell2.innerHTML = novePrijmeni;
			cell3.innerHTML = noveDatumNarozeni;
			cell4.innerHTML = novaAdresa;
			cell5.innerHTML = novyEmail;
			cell6.innerHTML = novyTelefon;

			table.appendChild(newRow);

	}



	vypisUlozenePojistence() {
		for (const novyPojistenec of this.pojistenci) {
			const table = document.getElementById("tbody");
			const row = table.insertRow();
			const cell1 = row.insertCell(0);
			const cell2 = row.insertCell(1);
			const cell3 = row.insertCell(2);
			const cell4 = row.insertCell(3);
			const cell5 = row.insertCell(4);
			const cell6 = row.insertCell(5);
			cell1.innerHTML = novyPojistenec.jmeno;
			cell2.innerHTML = novyPojistenec.prijmeni;
			cell3.innerHTML = novyPojistenec.datumNarozeni;
			cell4.innerHTML = novyPojistenec.adresa;
			cell5.innerHTML = novyPojistenec.email;
			cell6.innerHTML = novyPojistenec.telefon;
			table.appendChild(row);
      }
	}

	ulozPojistence(dataKUlozeni) {
		localStorage.setItem("pojistenci", JSON.stringify(dataKUlozeni));
	}    

}

