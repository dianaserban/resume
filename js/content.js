var data = {
    description: "Ce este Lorem Ipsum?\n" +
    "    Lorem Ipsum este pur şi simplu o machetă pentru text a industriei tipografice. Lorem Ipsum a\n" +
    "fost macheta standard a industriei încă din secolul al XVI-lea, când un tipograf anonim a luat o\n" +
    "planşetă de litere şi le-a amestecat pentru a crea o carte demonstrativă pentru literele\n" +
    "respective. Nu doar că a supravieţuit timp de cinci secole, dar şi a facut saltul în tipografia\n" +
    "electronică practic neschimbată. A fost popularizată în anii '60 odată cu ieşirea colilor\n" +
    "Letraset care conţineau pasaje Lorem Ipsum, iar mai recent, prin programele de publicare pentru\n" +
    "calculator, ca Aldus PageMaker care includeau versiuni de Lorem Ipsum.\n" +
    "\n" +
    "    De ce îl folosim?\n" +
    "    E un fapt bine stabilit că cititorul va fi sustras de conţinutul citibil al unei pagini atunci\n" +
    "când se uită la aşezarea în pagină. Scopul utilizării a Lorem Ipsum, este acela că are o\n" +
    "distribuţie a literelor mai mult sau mai puţin normale, faţă de utilizarea a ceva de genul\n" +
    "\"Conţinut aici, conţinut acolo\", făcându-l să arate ca o engleză citibilă. Multe pachete de\n" +
    "publicare pentru calculator şi editoare de pagini web folosesc acum Lorem Ipsum ca model\n" +
    "standard de text, iar o cautare de \"lorem ipsum\" va rezulta în o mulţime de site-uri web în\n" +
    "dezvoltare. Pe parcursul anilor, diferite versiuni au evoluat, uneori din intâmplare, uneori\n" +
    "intenţionat (infiltrându-se elemente de umor sau altceva de acest gen).",
    card_title_1:"Card title 1",
    card_title_2:"Card title 2",
    card_title_3:"Card title 3",
    card_description_1:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    card_description_2:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    card_description_3:"Some quick example text to build on the card title and make up the bulk of the card's content.",
};

document.getElementById("result").innerHTML = tmpl("tmpl-demo", data);