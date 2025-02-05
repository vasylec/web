

const messages = [
    "Ți-am zis doar să nu mă apesi!",
    "Ce nu înțelegi din 'Nu mă apăsa'?",
    "Bine, nu mai pot să tac… de ce mă apeși?",
    "Crezi că mă bucur când mă apeși?",
    "Nu îți dai seama că mă rănești, nu?",
    "Oh, tu chiar vrei să mă supăr, nu?",
    "OK, dar știi că îți voi da înapoi cu ceva, nu?",
    "Serios? Crezi că glumesc?",
    "Hai, nu fii așa insistent!",
    "Mă începi să mă întreb dacă mă iubești sau mă urăști.",
    "Te avertizez, devii enervant!",
    "Nu am zis că mă vei face să plâng, dar aproape că reușești!",
    "Să știi că ți-am spus de la început!",
    "Dacă îți place așa mult, ar trebui să mă plătești!",
    "Sunt oprit... dar tot îți mulțumesc pentru exercițiul de deget!",
    "Nu te-ai săturat de mine încă?",
    "Îți spun din nou, nu mă apăsa!",
    "OK, am înțeles... vrei să mă faci să devin nervos. Te-ai descurcat!",
    "Pizdec",
    "OK, ai câștigat... Butonul a fost apăsat de prea multe ori!"
  ];

let clickCount = 0;

const button = document.getElementById('btn');

button.addEventListener('click', () => {
    if (clickCount < messages.length) {
      button.textContent = messages[clickCount]; 
      clickCount++;
    } else {
      button.textContent = "Dead..."; 
    }
  });

