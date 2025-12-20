const questionPool = [

        {"q": "Hauptstadt von Frankreich?", "a": "Paris", "d": 1},
        {"q": "Welche Farbe hat der Himmel an einem klaren Tag?", "a": "Blau", "d": 1},
        {"q": "Wie viele Kontinente gibt es?", "a": "7", "d": 1},
        {"q": "Welches Tier miaut?", "a": "Katze", "d": 1},
        {"q": "Wie heißt der größte Planet des Sonnensystems?", "a": "Jupiter", "d": 1},
        {"q": "Wer ist Micky Maus’ Haustierhund?", "a": "Pluto", "d": 1},
        {"q": "Hauptbestandteil von Wasser?", "a": "H2O", "d": 1},
        {"q": "Welche Sprache spricht man in Spanien?", "a": "Spanisch", "d": 1},
        {"q": "Wie viele Tage hat ein Jahr?", "a": "365", "d": 1},
        {"q": "Was ist das Gegenteil von heiß?", "a": "Kalt", "d": 1},
        {"q": "Welches Meerestier hat acht Arme?", "a": "Oktopus", "d": 1},
        {"q": "Welches Land ist für Pizza bekannt?", "a": "Italien", "d": 1},
        {"q": "Wie heißt der deutsche Bundesadler?", "a": "Bundesadler", "d": 1},
        {"q": "Welche Farbe haben Zebras?", "a": "Schwarz-Weiß", "d": 1},
        {"q": "Wie viele Minuten hat eine Stunde?", "a": "60", "d": 1},
        {"q": "Wer ist der bekannteste Zauberer aus Hogwarts?", "a": "Harry Potter", "d": 1},
        {"q": "Was trinkt man typischerweise morgens?", "a": "Kaffee", "d": 1},
        {"q": "Welcher Kontinent ist am größten?", "a": "Asien", "d": 1},
        {"q": "Woraus besteht ein Baumstamm?", "a": "Holz", "d": 1},
        {"q": "Wie heißt der höchste Berg der Welt?", "a": "Mount Everest", "d": 1},
        {"q": "Was ist ein typischer Haustier-Vogel?", "a": "Wellensittich", "d": 1},
        {"q": "Wie viele Augen hat ein Mensch typischerweise?", "a": "2", "d": 1},
        {"q": "Wo lebt ein Pinguin?", "a": "Antarktis", "d": 1},
        {"q": "Welche Stadt ist für den Eiffelturm bekannt?", "a": "Paris", "d": 1},
        {"q": "Was wird aus Milch hergestellt?", "a": "Käse", "d": 1},
        {"q": "Welche Frucht ist gelb und krumm?", "a": "Banane", "d": 1},
        {"q": "Was ist der plural von Haus?", "a": "Häuser", "d": 1},
        {"q": "Welches Tier bellt?", "a": "Hund", "d": 1},
        {"q": "Wie heißt unsere Galaxie?", "a": "Milchstraße", "d": 1},
        {"q": "Wie viele Zähne hat ein erwachsener Mensch normalerweise?", "a": "32", "d": 1},
        {"q": "Welches Land ist für Sushi bekannt?", "a": "Japan", "d": 1},
        {"q": "Welche Form hat ein Rad?", "a": "Rund", "d": 1},
        {"q": "Wie heißt die Hauptstadt von Deutschland?", "a": "Berlin", "d": 1},
        {"q": "Welcher Planet ist der Erde am nächsten?", "a": "Venus", "d": 1},
        {"q": "Was ist das Gegenteil von groß?", "a": "Klein", "d": 1},
        {"q": "Wie heißt das Märchenmädchen mit roter Kappe?", "a": "Rotkäppchen", "d": 1},
        {"q": "Welche Jahreszeit ist am heißesten?", "a": "Sommer", "d": 1},
        {"q": "In welchem Land steht die Freiheitsstatue?", "a": "USA", "d": 1},
        {"q": "Was ist ein Baby-Schaf?", "a": "Lamm", "d": 1},
        {"q": "Welche Nuss ist grün außen und braun innen?", "a": "Walnuss", "d": 1},
        {"q": "Was ist 0 Grad Celsius?", "a": "Gefrierpunkt von Wasser", "d": 1},
        {"q": "Welches Tier legt Eier und kräht?", "a": "Huhn", "d": 1},
        {"q": "Wie heißt das bekannte Maus-Maskottchen in Deutschland?", "a": "Die Maus", "d": 1},
        {"q": "Welche Sportart nutzt einen Ball und Körbe?", "a": "Basketball", "d": 1},
        {"q": "Was ist ein typisches Getreide?", "a": "Weizen", "d": 1},
        {"q": "Wie heißt das berühmteste Segelboot von Piraten?", "a": "Schiff", "d": 1},
        {"q": "Was zeigt eine Uhr?", "a": "Zeit", "d": 1},
        {"q": "Wie nennt man ein männliches Pferd?", "a": "Hengst", "d": 1},
        {"q": "Welche Farbe hat Schnee?", "a": "Weiß", "d": 1},
        {"q": "Was ist ein typischer Wintermonat?", "a": "Dezember", "d": 1},
        {"q": "Welche Frucht hat Kerne außen?", "a": "Erdbeere", "d": 1},
        {"q": "Was isst ein Panda am liebsten?", "a": "Bambus", "d": 1},
        {"q": "Wie heißt der bekannte Detektiv aus London?", "a": "Sherlock Holmes", "d": 1},
        {"q": "Welche Form hat ein Pizzastück?", "a": "Dreieck", "d": 1},
        {"q": "Was trägt man an den Füßen?", "a": "Schuhe", "d": 1},
        {"q": "Welches Metall ist magnetisch?", "a": "Eisen", "d": 1},
        {"q": "Was ist eine bekannte Disney-Prinzessin mit rotem Haar?", "a": "Ariel", "d": 1},
        {"q": "Wer lebt im Dschungel: Löwe oder Tiger?", "a": "Tiger", "d": 1},
        {"q": "Wie viele Monate hat ein Jahr?", "a": "12", "d": 1},
        {"q": "Was schmilzt in der Sonne: Eis oder Stein?", "a": "Eis", "d": 1},
        {"q": "Welcher Vogel kann nicht fliegen aber sehr schnell laufen?", "a": "Strauß", "d": 1},
        {"q": "Was trägt man am Kopf?", "a": "Hut", "d": 1},
        {"q": "Was macht man mit einem Buch?", "a": "Lesen", "d": 1},
        {"q": "Was ist größer: Elefant oder Hund?", "a": "Elefant", "d": 1},
        {"q": "Welche Farbe entsteht aus Blau + Gelb?", "a": "Grün", "d": 1},
        {"q": "Wie heißt Deutschlands längster Fluss?", "a": "Rhein", "d": 1},
        {"q": "Was ist der wichtigste Stern für die Erde?", "a": "Die Sonne", "d": 1},
        {"q": "Welches Tier hat einen Rüssel?", "a": "Elefant", "d": 1},
        {"q": "Was ist ein typisches Frühstücksgetränk für Kinder?", "a": "Kakao", "d": 1},
        {"q": "Wer ist der berühmteste Klempner der Videospielwelt?", "a": "Mario", "d": 1},
        {"q": "Wie nennt man Baby-Hunde?", "a": "Welpen", "d": 1},
        {"q": "Was ist ein typisches Fahrzeug?", "a": "Auto", "d": 1},
        {"q": "Wie heißt das Hauptorgan zum Denken?", "a": "Gehirn", "d": 1},
        {"q": "Was ist das Gegenteil von schnell?", "a": "Langsam", "d": 1},
        {"q": "Was stinkt und kommt von Stinktieren?", "a": "Spray", "d": 1},
        {"q": "Was zeigt ein Thermometer?", "a": "Temperatur", "d": 1},
        {"q": "Welche Farbe hat Gras?", "a": "Grün", "d": 1},
        {"q": "Wie nennt man ein männliches Rind?", "a": "Bulle", "d": 1},
        {"q": "Was benutzt man zum Zähneputzen?", "a": "Zahnbürste", "d": 1},
        {"q": "Woraus besteht Eis am Stiel?", "a": "Gefrorener Saft", "d": 1},
        {"q": "Was lebt im Bienenstock?", "a": "Bienen", "d": 1},
        {"q": "Welche Farbe hat Blut?", "a": "Rot", "d": 1},
        {"q": "Wie hört man Musik auf dem Handy?", "a": "Kopfhörer", "d": 1},
        {"q": "Wer war der erste Mensch im Weltall?", "a": "Juri Gagarin", "d": 1},
        {"q": "Wie heißt das berühmte Brettspiel mit Straßen?", "a": "Monopoly", "d": 1},
        {"q": "Was trinkt ein Baby?", "a": "Milch", "d": 1},
        {"q": "Wie heißt das berühmteste rote Obst?", "a": "Apfel", "d": 1},
        {"q": "Welche Sprache spricht man in England?", "a": "Englisch", "d": 1},
        {"q": "Was ist flach, rund und zeigt die Zeit?", "a": "Uhr", "d": 1},
        {"q": "Welches Tier hat einen langen Hals?", "a": "Giraffe", "d": 1},
        {"q": "Was ist der wichtigste Planet für uns?", "a": "Erde", "d": 1},
        {"q": "Welche Farbe hat die Banane?", "a": "Gelb", "d": 1},
        {"q": "Was isst man auf einem Grill?", "a": "Würstchen", "d": 1},
        {"q": "Wie nennt man den Mann der Mutter?", "a": "Vater", "d": 1},
        {"q": "Wie heißt die Hauptstadt von Italien?", "a": "Rom", "d": 1},

    {"q": "Hauptstadt von Kanada?", "a": "Ottawa", "d": 2},
    {"q": "Welches chemische Element hat das Symbol O?", "a": "Sauerstoff", "d": 2},
    {"q": "Wie heißt der längste Fluss Afrikas?", "a": "Nil", "d": 2},
    {"q": "Welches Land gewann die Fußball-WM 2014?", "a": "Deutschland", "d": 2},
    {"q": "Wer schrieb ‚Faust‘?", "a": "Goethe", "d": 2},
    {"q": "Wie heißt die Hauptstadt von Norwegen?", "a": "Oslo", "d": 2},
    {"q": "Welche Farbe entsteht aus Rot und Blau?", "a": "Violett", "d": 2},
    {"q": "Wer malte die Mona Lisa?", "a": "Leonardo da Vinci", "d": 2},
    {"q": "Wie viele Spieler hat ein Fußballteam auf dem Feld?", "a": "11", "d": 2},
    {"q": "Welches Meer liegt westlich von Portugal?", "a": "Atlantik", "d": 2},
    {"q": "Wie nennt man einen jungen Frosch?", "a": "Kaulquappe", "d": 2},
    {"q": "Wie heißt der höchste Berg Europas?", "a": "Mont Blanc", "d": 2},
    {"q": "Wie heißt die Hauptstadt der Schweiz?", "a": "Bern", "d": 2},
    {"q": "Wer erfand die Glühbirne?", "a": "Thomas Edison", "d": 2},
    {"q": "Welches Land ist bekannt für Tulpen?", "a": "Niederlande", "d": 2},
    {"q": "In welcher Stadt steht der Big Ben?", "a": "London", "d": 2},
    {"q": "Wie heißt die größte Wüste der Erde?", "a": "Antarktis", "d": 2},
    {"q": "Was ist die Währung von Großbritannien?", "a": "Pfund", "d": 2},
    {"q": "Wie heißt der Autor von Harry Potter?", "a": "J.K. Rowling", "d": 2},
    {"q": "Welches Organ pumpt Blut durch den Körper?", "a": "Herz", "d": 2},
    {"q": "Wie viele Planeten hat unser Sonnensystem (aktuell)?", "a": "8", "d": 2},
    {"q": "Welches Land nennt man auch ‚Down Under‘?", "a": "Australien", "d": 2},
    {"q": "Welche Sprache spricht man in Brasilien?", "a": "Portugiesisch", "d": 2},
    {"q": "Wie heißt das größte Säugetier der Welt?", "a": "Blauwal", "d": 2},
    {"q": "Wer schrieb ‚1984‘?", "a": "George Orwell", "d": 2},
    {"q": "Welches Land gewann den ESC 2021?", "a": "Italien", "d": 2},
    {"q": "Wie heißt der größte Kontinent?", "a": "Asien", "d": 2},
    {"q": "Wie nennt man die Lehre von Karten?", "a": "Kartografie", "d": 2},
    {"q": "Wie viele Farben hat der Regenbogen?", "a": "7", "d": 2},
    {"q": "Was ist die Hauptstadt von Schweden?", "a": "Stockholm", "d": 2},
    {"q": "Wie heißt das kleinste Knochen im Körper?", "a": "Steigbügel", "d": 2},
    {"q": "Wer war der erste Mensch auf dem Mond?", "a": "Neil Armstrong", "d": 2},
    {"q": "Welches Tier kann rückwärts fliegen?", "a": "Kolibri", "d": 2},
    {"q": "Wie nennt man hausgemachte italienische Nudeln?", "a": "Pasta", "d": 2},
    {"q": "Wie heißt das größte Land der Welt nach Fläche?", "a": "Russland", "d": 2},
    {"q": "Welcher Planet ist bekannt als der Rote Planet?", "a": "Mars", "d": 2},
    {"q": "Wie heißt die Hauptstadt von China?", "a": "Peking", "d": 2},
    {"q": "Welches Land produziert weltweit den meisten Kaffee?", "a": "Brasilien", "d": 2},
    {"q": "Wie nennt man ein weibliches Pferd?", "a": "Stute", "d": 2},
    {"q": "Wer sang den Hit ‚Thriller‘?", "a": "Michael Jackson", "d": 2},
    {"q": "Wie heißt der längste Fluss Europas?", "a": "Wolga", "d": 2},
    {"q": "Welches Land heißt offiziell ‚Hellenische Republik‘?", "a": "Griechenland", "d": 2},
    {"q": "Was ist das größte Binnenmeer der Erde?", "a": "Kaspisches Meer", "d": 2},
    {"q": "Welche Farbe hat ein Smaragd?", "a": "Grün", "d": 2},
    {"q": "Welcher Planet hat die meisten Monde?", "a": "Saturn", "d": 2},
    {"q": "Wie heißt die Hauptstadt von Österreich?", "a": "Wien", "d": 2},
    {"q": "Wie nennt man Wissenschaft von Pflanzen?", "a": "Botanik", "d": 2},
    {"q": "Wer ist der Gott des Donners in der nordischen Mythologie?", "a": "Thor", "d": 2},
    {"q": "Was ist der größte Ozean?", "a": "Pazifik", "d": 2},
    {"q": "Wie heißt das kleinste Land der Welt?", "a": "Vatikanstadt", "d": 2},
    {"q": "Welches Getränk stammt ursprünglich aus China?", "a": "Tee", "d": 2},
    {"q": "Welche Sportart wird bei Wimbledon gespielt?", "a": "Tennis", "d": 2},
    {"q": "Wie heißt die Hauptstadt von Polen?", "a": "Warschau", "d": 2},
    {"q": "Wie nennt man Tiere, die nachts aktiv sind?", "a": "Nachtaktiv", "d": 2},
    {"q": "Wer erfand das Telefon?", "a": "Alexander Graham Bell", "d": 2},
    {"q": "Wie heißt die Hauptstadt von Griechenland?", "a": "Athen", "d": 2},
    {"q": "Wie nennt man Pflanzenfresser?", "a": "Herbivoren", "d": 2},
    {"q": "Welche Sprache spricht man in Ägypten?", "a": "Arabisch", "d": 2},
    {"q": "Wie heißt das bekannteste Werk von van Gogh?", "a": "Sternennacht", "d": 2},
    {"q": "Welches Tier ist der König der Tiere?", "a": "Löwe", "d": 2},
    {"q": "Wie heißt das größte Korallenriff der Welt?", "a": "Great Barrier Reef", "d": 2},
    {"q": "Wie nennt man Lava, wenn sie erstarrt ist?", "a": "Basalt", "d": 2},
    {"q": "Welche Farbe hat ein Rubin?", "a": "Rot", "d": 2},
    {"q": "Wie heißt die Hauptstadt von Argentinien?", "a": "Buenos Aires", "d": 2},
    {"q": "Welches Element ist der Hauptbestandteil der Sonne?", "a": "Wasserstoff", "d": 2},
    {"q": "Wie heißt der längste Halswirbel bei Giraffen?", "a": "Halswirbel C7", "d": 2},
    {"q": "Wie nennt man die Lehre von Tieren?", "a": "Zoologie", "d": 2},
    {"q": "Welche Sprache spricht man in der Schweiz?", "a": "Deutsch, Französisch, Italienisch, Rätoromanisch", "d": 2},
    {"q": "Wie heißt der höchste Vulkan Europas?", "a": "Ätna", "d": 2},
    {"q": "Welches Land hat die meisten Einwohner?", "a": "China", "d": 2},
    {"q": "Wie heißt die Hauptstadt von Portugal?", "a": "Lissabon", "d": 2},
    {"q": "Wie nennt man ein Vogelbaby?", "a": "Küken", "d": 2},
    {"q": "Wer schrieb ‚Der kleine Prinz‘?", "a": "Antoine de Saint-Exupéry", "d": 2},
    {"q": "Welche Insel ist für Vulkane bekannt und gehört zu Italien?", "a": "Sizilien", "d": 2},
    {"q": "Wie heißt das größte Land Südamerikas?", "a": "Brasilien", "d": 2},
    {"q": "Welche Religion verehrt Allah?", "a": "Islam", "d": 2},
    {"q": "Wie heißt das größte Tier an Land?", "a": "Afrikanischer Elefant", "d": 2},
    {"q": "Was ist das Symbol für Eisen?", "a": "Fe", "d": 2},
    {"q": "Wie nennt man ein Tier, das nur Pflanzen und Tiere frisst?", "a": "Allesfresser", "d": 2},
    {"q": "Wer ist der bekannteste Detektiv von Agatha Christie?", "a": "Hercule Poirot", "d": 2},
    {"q": "Welche Stadt wird die Stadt der Liebe genannt?", "a": "Paris", "d": 2},
    {"q": "Wie heißt ein berühmter deutscher Komponist der Klassik?", "a": "Beethoven", "d": 2},
    {"q": "Welche Farbe hat ein typischer Feuerwehrwagen?", "a": "Rot", "d": 2},
    {"q": "Wie nennt man die Wissenschaft vom Weltraum?", "a": "Astronomie", "d": 2},
    {"q": "Welche Inselgruppe gehört zu Spanien und liegt im Atlantik?", "a": "Kanarische Inseln", "d": 2},
    {"q": "Wie heißt das größte Raubtier Europas?", "a": "Braunbär", "d": 2},
    {"q": "Wer ist der Herr der Meere in der griechischen Mythologie?", "a": "Poseidon", "d": 2},
    {"q": "Wie heißt die Hauptstadt von Dänemark?", "a": "Kopenhagen", "d": 2},
    {"q": "Was ist das härteste natürliche Material der Welt?", "a": "Diamant", "d": 2},

    {"q": "Wie heißt die größte Stadt der Türkei?", "a": "Istanbul", "d": 3},
    {"q": "Wer malte ‚Das letzte Abendmahl‘?", "a": "Leonardo da Vinci", "d": 3},
    {"q": "Welche Blutgruppe gilt als Universalspender?", "a": "0 negativ", "d": 3},
    {"q": "Wie many Knochen hat ein erwachsener Mensch?", "a": "206", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Kolumbien?", "a": "Bogotá", "d": 3},
    {"q": "Von welchem Land wurde die Terrakotta-Armee geschaffen?", "a": "China", "d": 3},
    {"q": "Welches Vitamin bildet der Körper durch Sonnenlicht?", "a": "Vitamin D", "d": 3},
    {"q": "In welcher Stadt fand 2008 die Olympiade statt?", "a": "Peking", "d": 3},
    {"q": "Wie heißt der längste Gebirgszug der Welt?", "a": "Anden", "d": 3},
    {"q": "Welcher Planet hat den größten Mond?", "a": "Jupiter (Ganymed)", "d": 3},
    {"q": "Welches Land hat die längste Küstenlinie der Welt?", "a": "Kanada", "d": 3},
    {"q": "Wie heißt das größte Binnenland der Welt?", "a": "Kasachstan", "d": 3},
    {"q": "Welcher Dichter schrieb ‚Die Leiden des jungen Werthers‘?", "a": "Goethe", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Neuseeland?", "a": "Wellington", "d": 3},
    {"q": "Welche Krankheit wurde mithilfe von Penicillin erstmals wirksam behandelt?", "a": "Bakterielle Infektionen", "d": 3},
    {"q": "Wie heißt die größte Insel im Mittelmeer?", "a": "Sizilien", "d": 3},
    {"q": "Welcher Fluss fließt durch Budapest?", "a": "Donau", "d": 3},
    {"q": "In welchem Land steht die Akropolis?", "a": "Griechenland", "d": 3},
    {"q": "Welche Stadt wird die Weiße Stadt genannt und liegt in Israel?", "a": "Tel Aviv", "d": 3},
    {"q": "Wie heißt das größte Reptil der Welt?", "a": "Leistenkrokodil", "d": 3},
    {"q": "Wer komponierte die ‚Zauberflöte‘?", "a": "Mozart", "d": 3},
    {"q": "Wie heißt der internationale Flughafen in New York mit Kürzel JFK?", "a": "John F. Kennedy International Airport", "d": 3},
    {"q": "Welche Währung hat Mexiko?", "a": "Peso", "d": 3},
    {"q": "Wie nennt man die Lehre von Gesteinen?", "a": "Petrologie", "d": 3},
    {"q": "Wie heißt der chemische Vorgang, bei dem Pflanzen Energie aus Licht erzeugen?", "a": "Fotosynthese", "d": 3},
    {"q": "Was ist der kleinste Kanton der Schweiz?", "a": "Appenzell Innerrhoden", "d": 3},
    {"q": "Wer entdeckte Amerika 1492?", "a": "Christoph Kolumbus", "d": 3},
    {"q": "Welche Sprache spricht man in Luxemburg?", "a": "Luxemburgisch, Deutsch, Französisch", "d": 3},
    {"q": "Wie heißt das größte Korallenriffsystem der Welt?", "a": "Great Barrier Reef", "d": 3},
    {"q": "Welcher Planet besitzt das stärkste Magnetfeld im Sonnensystem?", "a": "Jupiter", "d": 3},
    {"q": "Wer spielt Harry Potter im Film?", "a": "Daniel Radcliffe", "d": 3},
    {"q": "Welche Automarke produziert das Modell ‚Mustang‘?", "a": "Ford", "d": 3},
    {"q": "Welches Land ist reich an Fjorden und nördlichen Lichtern?", "a": "Norwegen", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Ungarn?", "a": "Budapest", "d": 3},
    {"q": "Welcher Künstler schuf die Campbells Soup Dosen?", "a": "Andy Warhol", "d": 3},
    {"q": "Welches Organ ist für die Insulinproduktion verantwortlich?", "a": "Bauchspeicheldrüse", "d": 3},
    {"q": "Wie heißt die größte Wüste Afrikas?", "a": "Sahara", "d": 3},
    {"q": "Welches Land besitzt die Pyramiden von Gizeh?", "a": "Ägypten", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Malaysia?", "a": "Kuala Lumpur", "d": 3},
    {"q": "Wie viele Zeitzonen hat Russland?", "a": "11", "d": 3},
    {"q": "Welche Insel gehört nicht zu den Balearen: Mallorca, Ibiza oder Madeira?", "a": "Madeira", "d": 3},
    {"q": "Was ist die größte Raubkatze der Welt?", "a": "Tiger", "d": 3},
    {"q": "Welches Metall leitet Strom am besten?", "a": "Silber", "d": 3},
    {"q": "Wie heißt der Schnellzug in Japan?", "a": "Shinkansen", "d": 3},
    {"q": "Wer schrieb die Sherlock-Holmes-Romane?", "a": "Arthur Conan Doyle", "d": 3},
    {"q": "Wie heißt das größte Organ des Menschen?", "a": "Haut", "d": 3},
    {"q": "Welche Sportlerin gewann 23 Grand-Slam-Titel im Tennis?", "a": "Serena Williams", "d": 3},
    {"q": "Was ist die Hauptstadt von Chile?", "a": "Santiago de Chile", "d": 3},
    {"q": "Wie nennt man einen Astronauten in Russland?", "a": "Kosmonaut", "d": 3},
    {"q": "Welches Metall hat das chemische Symbol Cu?", "a": "Kupfer", "d": 3},
    {"q": "Wie heißt die größte Stadt Südamerikas?", "a": "São Paulo", "d": 3},
    {"q": "Welche Sprache spricht man in Nigeria?", "a": "Englisch", "d": 3},
    {"q": "Wer ist die Hauptfigur in ‚Breaking Bad‘?", "a": "Walter White", "d": 3},
    {"q": "Welches Land hat die meisten aktiven Vulkane?", "a": "Indonesien", "d": 3},
    {"q": "Wie viele Spieler hat eine Basketballmannschaft auf dem Feld?", "a": "5", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Kroatien?", "a": "Zagreb", "d": 3},
    {"q": "Welche Einheit misst die Frequenz?", "a": "Hertz", "d": 3},
    {"q": "Wie nennt man die japanische Kunst des Papierfaltens?", "a": "Origami", "d": 3},
    {"q": "Wer war der erste deutsche Bundeskanzler?", "a": "Konrad Adenauer", "d": 3},
    {"q": "Wie heißt der längste Tunnel der Welt?", "a": "Gotthard-Basistunnel", "d": 3},
    {"q": "Welche Farbe hat der Lapislazuli?", "a": "Blau", "d": 3},
    {"q": "Wie viele Tasten hat ein klassisches Klavier?", "a": "88", "d": 3},
    {"q": "Wie heißt der Hauptcharakter in ‚The Witcher‘?", "a": "Geralt von Riva", "d": 3},
    {"q": "Wer gilt als Erfinder der Relativitätstheorie?", "a": "Albert Einstein", "d": 3},
    {"q": "In welchem Land wurden die Olympischen Spiele erfunden?", "a": "Griechenland", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Südafrika (eine davon)?", "a": "Pretoria", "d": 3},
    {"q": "Welches Land besitzt die größte Bevölkerung Afrikas?", "a": "Nigeria", "d": 3},
    {"q": "Wer ist der Autor von ‚Der Herr der Ringe‘?", "a": "J.R.R. Tolkien", "d": 3},
    {"q": "Was ist das häufigste chemische Element im Universum?", "a": "Wasserstoff", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Kuba?", "a": "Havanna", "d": 3},
    {"q": "Welche Automarke gehört zu Elon Musks Unternehmen Tesla?", "a": "Tesla", "d": 3},
    {"q": "Was ist die weltweit meistegesprochene Muttersprache?", "a": "Mandarin-Chinesisch", "d": 3},
    {"q": "Wer entdeckte das Penicillin?", "a": "Alexander Fleming", "d": 3},
    {"q": "Wie heißt der höchste Berg Nordamerikas?", "a": "Denali", "d": 3},
    {"q": "Wie nennt man die Wissenschaft von den Karten?", "a": "Kartografie", "d": 3},
    {"q": "Welche Stadt gilt als Modehauptstadt Italiens?", "a": "Mailand", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Peru?", "a": "Lima", "d": 3},
    {"q": "Welcher Ozean liegt zwischen Afrika und Australien?", "a": "Indischer Ozean", "d": 3},
    {"q": "Wer war der berühmte König von Makedonien, der ein riesiges Reich schuf?", "a": "Alexander der Große", "d": 3},
    {"q": "Wie lautet das chemische Symbol für Blei?", "a": "Pb", "d": 3},
    {"q": "Welches Land wird als Land der aufgehenden Sonne bezeichnet?", "a": "Japan", "d": 3},
    {"q": "Wie heißt das bekannteste Opernhaus Australiens?", "a": "Sydney Opera House", "d": 3},
    {"q": "Welches Element besitzt die Ordnungszahl 1?", "a": "Wasserstoff", "d": 3},
    {"q": "Wie heißt das berühmte Wahrzeichen in San Francisco?", "a": "Golden Gate Bridge", "d": 3},
    {"q": "Welche Sportart betreibt Cristiano Ronaldo?", "a": "Fußball", "d": 3},
    {"q": "Wie viele Sterne hat die US-Flagge?", "a": "50", "d": 3},
    {"q": "Wie heißt die Hauptstadt von Thailand?", "a": "Bangkok", "d": 3},
    {"q": "Welche Stadt liegt am Tiber?", "a": "Rom", "d": 3},
    {"q": "Was ist die größte Echse der Welt?", "a": "Komodowaran", "d": 3},
    {"q": "Wie heißt die Hauptfigur aus ‚Greys Anatomy‘?", "a": "Meredith Grey", "d": 3},
    {"q": "Wer war der erste US-Präsident?", "a": "George Washington", "d": 3},

    {"q": "Welcher Physiker formulierte die spezielle Relativitätstheorie?", "a": "Albert Einstein", "d": 4},
    {"q": "Wie lautet der Name des größten Binnenmeeres der Welt?", "a": "Kaspisches Meer", "d": 4},
    {"q": "Welche Stadt wurde 1945 durch die erste Atombombe zerstört?", "a": "Hiroshima", "d": 4},
    {"q": "Wie heißt die Hauptstadt von Neuseeland?", "a": "Wellington", "d": 4},
    {"q": "Wer schrieb den Roman '1984'?", "a": "George Orwell", "d": 4},
    {"q": "Welches Land wird als 'Land der tausend Seen' bezeichnet?", "a": "Finnland", "d": 4},
    {"q": "Welches Enzym spaltet Laktose?", "a": "Laktase", "d": 4},
    {"q": "Wie heißt der längste Fluss Afrikas?", "a": "Nil", "d": 4},
    {"q": "Wer malte das Werk 'Guernica'?", "a": "Pablo Picasso", "d": 4},
    {"q": "Welche Sprache ist Amtssprache in Brasilien?", "a": "Portugiesisch", "d": 4},

    {"q": "Wie heißt das größte Raubtier an Land?", "a": "Eisbär", "d": 4},
    {"q": "Welcher Planet hat den größten Mond im Sonnensystem?", "a": "Jupiter (Ganymed)", "d": 4},
    {"q": "Welches Metall leitet Strom am besten?", "a": "Silber", "d": 4},
    {"q": "Wie heißt die Hauptstadt von Kanada?", "a": "Ottawa", "d": 4},
    {"q": "In welchem Jahrzehnt fiel die Berliner Mauer?", "a": "1980er (1989)", "d": 4},
    {"q": "Wer komponierte die Oper 'Die Zauberflöte'?", "a": "Wolfgang Amadeus Mozart", "d": 4},
    {"q": "Wie heißt das größte Korallenriff der Erde?", "a": "Great Barrier Reef", "d": 4},
    {"q": "Wer gilt als Begründer der Psychoanalyse?", "a": "Sigmund Freud", "d": 4},
    {"q": "Welche chemische Verbindung besteht aus Natrium und Chlor?", "a": "Natriumchlorid (Salz)", "d": 4},
    {"q": "Welches Land ist flächenmäßig das größte der Welt?", "a": "Russland", "d": 4},

    {"q": "Wie heißt der höchste Berg Nordamerikas?", "a": "Denali", "d": 4},
    {"q": "Welcher Künstler schuf die Skulptur 'David'?", "a": "Michelangelo", "d": 4},
    {"q": "Wie heißt das größte Organ des Menschen?", "a": "Die Haut", "d": 4},
    {"q": "Welche Stadt ist die Hauptstadt der Türkei?", "a": "Ankara", "d": 4},
    {"q": "Welche Währung hatte Deutschland vor dem Euro?", "a": "Deutsche Mark", "d": 4},
    {"q": "Wer erfand den Buchdruck in Europa?", "a": "Johannes Gutenberg", "d": 4},
    {"q": "Wie heißt der längste Fluss Europas?", "a": "Wolga", "d": 4},
    {"q": "Welcher Staat war der erste, der den Euro einführte?", "a": "Belgien (erste Landesgenehmigung)", "d": 4},
    {"q": "Wie heißt der größte Planet im Sonnensystem?", "a": "Jupiter", "d": 4},
    {"q": "Welcher Maler ist für den Stil 'Pointillismus' bekannt?", "a": "Georges Seurat", "d": 4},

    {"q": "Welche Religion hat das Tripitaka als heilige Schrift?", "a": "Buddhismus", "d": 4},
    {"q": "Wie heißt der kälteste bekannte Kontinent der Erde?", "a": "Antarktis", "d": 4},
    {"q": "Welcher griechische Mathematiker gilt als Erfinder des Hebelgesetzes?", "a": "Archimedes", "d": 4},
    {"q": "Wie heißt die Hauptstadt von Chile?", "a": "Santiago de Chile", "d": 4},
    {"q": "Welche Firma entwickelte das erste kommerzielle Smartphone?", "a": "IBM (Simon)", "d": 4},
    {"q": "Welcher britische Schriftsteller schuf Sherlock Holmes?", "a": "Arthur Conan Doyle", "d": 4},
    {"q": "Wie heißt der erste Mensch, der im Weltraum war?", "a": "Juri Gagarin", "d": 4},
    {"q": "Wie nennt man die Lehre von den Fossilien?", "a": "Paläontologie", "d": 4},
    {"q": "Wer komponierte die 9. Sinfonie mit der 'Ode an die Freude'?", "a": "Ludwig van Beethoven", "d": 4},
    {"q": "Wie heißt der größte See Afrikas?", "a": "Victoriasee", "d": 4},

    {"q": "Welches Land wird als 'Wiege der Demokratie' bezeichnet?", "a": "Griechenland", "d": 4},
    {"q": "Wie heißt der bekannteste Tempel in Kambodscha?", "a": "Angkor Wat", "d": 4},
    {"q": "Welche Einheit misst die Frequenz?", "a": "Hertz", "d": 4},
    {"q": "Wer schrieb das Drama 'Faust'?", "a": "Johann Wolfgang von Goethe", "d": 4},
    {"q": "Wie heißt die größte Insel der Welt?", "a": "Grönland", "d": 4},
    {"q": "Welcher Wissenschaftler entdeckte die Schwerkraftgesetze?", "a": "Isaac Newton", "d": 4},
    {"q": "Wie viele Chromosomen hat ein Mensch normalerweise?", "a": "46", "d": 4},
    {"q": "Wie heißt die Hauptstadt von Äthiopien?", "a": "Addis Abeba", "d": 4},
    {"q": "Wie nennt man die Lehre vom Weltall?", "a": "Astronomie", "d": 4},
    {"q": "Wie heißt die größte Wüste der Erde?", "a": "Antarktische Eiswüste", "d": 4},

    {"q": "Wer gilt als Vater der modernen Chemie?", "a": "Antoine Lavoisier", "d": 4},
    {"q": "Welche Stadt wird auch 'Ewige Stadt' genannt?", "a": "Rom", "d": 4},
    {"q": "Welcher afrikanische Präsident wurde 1993 mit dem Friedensnobelpreis ausgezeichnet?", "a": "Nelson Mandela", "d": 4},
    {"q": "Wie heißt das kleinste Knochen im menschlichen Körper?", "a": "Steigbügel", "d": 4},
    {"q": "Welcher Fluss fließt durch Kairo?", "a": "Nil", "d": 4},
    {"q": "Wie heißt der wissenschaftliche Begriff für Pflanzenkunde?", "a": "Botanik", "d": 4},
    {"q": "Wer entwickelte die Evolutionstheorie?", "a": "Charles Darwin", "d": 4},
    {"q": "Welches Land hat die Stadt Marrakesch?", "a": "Marokko", "d": 4},
    {"q": "Wie heißt der griechische Gott der Unterwelt?", "a": "Hades", "d": 4},
    {"q": "Welcher französische König trug den Beinamen 'Der Sonnenkönig'?", "a": "Ludwig XIV.", "d": 4},

    {"q": "Wie heißt die größte Halbinsel der Erde?", "a": "Arabische Halbinsel", "d": 4},
    {"q": "Welcher Schriftsteller schrieb 'Die Brüder Karamasow'?", "a": "Fjodor Dostojewski", "d": 4},
    {"q": "Wie heißt die Hauptstadt von Usbekistan?", "a": "Taschkent", "d": 4},
    {"q": "Welche Stadt gilt als Geburtsort des Jazz?", "a": "New Orleans", "d": 4},
    {"q": "Welche Gesteinsart entsteht aus geschmolzenem Magma?", "a": "Magmatit", "d": 4},
    {"q": "Wie heißt das größte Tier, das je gelebt hat?", "a": "Blauwal", "d": 4},
    {"q": "Welche beiden Elemente bilden Wasser?", "a": "Wasserstoff und Sauerstoff", "d": 4},
    {"q": "Wie heißt die Hauptstadt von Kolumbien?", "a": "Bogotá", "d": 4},
    {"q": "Welches Land war das Zentrum des Inkareichs?", "a": "Peru", "d": 4},
    {"q": "Wie heißt die Schicht der Sonne, die wir sehen können?", "a": "Photosphäre", "d": 4},

    {"q": "Welcher Komponist schrieb 'Carmina Burana'?", "a": "Carl Orff", "d": 4},
    {"q": "Wie heißt der größte Fluss in China?", "a": "Jangtse", "d": 4},
    {"q": "Welcher Kaiser leitete die Meiji-Restauration in Japan ein?", "a": "Kaiser Meiji", "d": 4},
    {"q": "Welcher Kontinent hat die meisten Länder?", "a": "Afrika", "d": 4},
    {"q": "Wer schrieb 'Die Verwandlung'?", "a": "Franz Kafka", "d": 4},
    {"q": "Welche Edelgasgruppe steht ganz rechts im Periodensystem?", "a": "Edelgase", "d": 4},
    {"q": "Wie heißt die Sprache, aus der viele medizinische Begriffe stammen?", "a": "Latein", "d": 4},
    {"q": "Welches Land ist das einzige, das zwei Hauptstädte hat (de jure/de facto)?", "a": "Bolivien (Sucre/La Paz)", "d": 4},
    {"q": "Welche Stadt ist die größte Metropolregion Südamerikas?", "a": "São Paulo", "d": 4},
    {"q": "Wie heißt die Hauptstadt von Slowenien?", "a": "Ljubljana", "d": 4},

    {"q": "Wie heißt das älteste bekannte schriftliche Friedensabkommen der Welt?", "a": "Frieden von Kadesch", "d": 5},
    {"q": "Welcher antike Philosoph formulierte das Höhlengleichnis?", "a": "Platon", "d": 5},
    {"q": "Welcher japanische Autor schrieb 'Die Aufzeichnungen des Träumenden'", "a": "Abe no Seimei zugeschrieben", "d": 5},
    {"q": "Wie heißt die seltenste natürliche Aminosäure im menschlichen Körper?", "a": "Selenocystein", "d": 5},
    {"q": "Welches Element hat die höchste Schmelztemperatur?", "a": "Wolfram", "d": 5},
    {"q": "Wie heißt die älteste Stadt der Welt, die bis heute durchgehend bewohnt ist?", "a": "Jericho", "d": 5},
    {"q": "Welches ist das größte bekannte Bakterium?", "a": "Thiomargarita namibiensis", "d": 5},
    {"q": "Welcher mittelalterliche Herrscher führte die 'Goldene Bulle' ein?", "a": "Karl IV.", "d": 5},
    {"q": "Wie heißt der größte Mond des Saturn?", "a": "Titan", "d": 5},
    {"q": "Wie lautet der Name der ersten KI, die die Turing-Test-Diskussion auslöste?", "a": "ELIZA", "d": 5},

    {"q": "Welcher Maler schuf das Werk 'Die Schule von Athen'?", "a": "Raffael", "d": 5},
    {"q": "Wie heißt das heilige Buch des Zoroastrismus?", "a": "Avesta", "d": 5},
    {"q": "Welche Sprache gilt als die am stärksten flektierte indogermanische Sprache?", "a": "Litauisch", "d": 5},
    {"q": "Wie lautet der Name des am weitesten entfernten bekannten Objekts im Sonnensystem?", "a": "Farfarout (2018 AG37)", "d": 5},
    {"q": "Welcher Komponist schrieb die Oper 'L’Orfeo'?", "a": "Claudio Monteverdi", "d": 5},
    {"q": "Wie heißt der erste König des vereinten Altägyptens?", "a": "Narmer", "d": 5},
    {"q": "Welches ist das seltenste Blutgruppensystem der Welt?", "a": "Rh-null", "d": 5},
    {"q": "Welcher Philosoph prägte den Begriff 'Übermensch'?", "a": "Friedrich Nietzsche", "d": 5},
    {"q": "Wie heißt das größte bekannte Lebewesen der Erde (nach Biomasse)?", "a": "Honigpilz Armillaria ostoyae", "d": 5},
    {"q": "Welcher Planet besitzt den stärksten Wind im Sonnensystem?", "a": "Neptun", "d": 5},

    {"q": "Wie heißt der Autor hinter dem Pseudonym 'Satoshi Nakamoto'?", "a": "Unbekannt", "d": 5},
    {"q": "Was ist die älteste bekannte schriftliche Sprache der Menschheit?", "a": "Sumerisch", "d": 5},
    {"q": "Welcher Stern ist der heißeste bekannte Stern?", "a": "WR 102", "d": 5},
    {"q": "Wie heißt die unbeobachtbare Region im Zentrum eines Schwarzen Lochs?", "a": "Singularität", "d": 5},
    {"q": "Welcher römische Kaiser legalisierte das Christentum?", "a": "Konstantin der Große", "d": 5},
    {"q": "Welche antike Kultur erfand die erste alphabetische Schrift?", "a": "Phönizier", "d": 5},
    {"q": "Wie heißt der mathematische Satz, der Quantenverschränkung begründet?", "a": "Bell’sche Ungleichungen", "d": 5},
    {"q": "Wie heißt die älteste bekannte mythologische Figur?", "a": "Inanna/Ishtar", "d": 5},
    {"q": "Welcher britische König verlor den amerikanischen Unabhängigkeitskrieg?", "a": "Georg III.", "d": 5},
    {"q": "Welcher Wissenschaftler entdeckte die Elektronenhülle?", "a": "Niels Bohr", "d": 5},

    {"q": "Wie heißt die Schrift der Osterinsel?", "a": "Rongorongo", "d": 5},
    {"q": "Wie heißt der größte Einschlagkrater der Erde?", "a": "Vredefort-Krater", "d": 5},
    {"q": "Welches Buch gilt als das älteste bekannte Gedicht der Menschheit?", "a": "Gilgamesch-Epos", "d": 5},
    {"q": "Welche Kultur schuf die Nazca-Linien?", "a": "Nazca-Kultur", "d": 5},
    {"q": "Welcher indische Kaiser verbreitete den Buddhismus in Asien?", "a": "Ashoka", "d": 5},
    {"q": "Wie heißt das schwerste natürlich vorkommende Element?", "a": "Uran", "d": 5},
    {"q": "Welche Tierart hat das komplexeste bekannte Nervensystem nach dem Menschen?", "a": "Oktopus", "d": 5},
    {"q": "Welcher König wurde als 'Der Prächtige' bezeichnet?", "a": "Süleyman I.", "d": 5},
    {"q": "Wie heißt der erste erfolgreiche Impfstoff der Menschheit?", "a": "Pockenimpfstoff", "d": 5},
    {"q": "Wie heißt der einzige natürliche Satellit des Pluto?", "a": "Charon", "d": 5},

    {"q": "Welche Sprache hat die meisten Fälle (Kasus)?", "a": "Tabassaran (Dagestan)", "d": 5},
    {"q": "Welcher antike Gelehrte verfasste das Werk 'Almagest'?", "a": "Ptolemaios", "d": 5},
    {"q": "Wie heißt die größte heute bekannte Galaxie?", "a": "IC 1101", "d": 5},
    {"q": "Welcher Wissenschaftler entdeckte Penicillin?", "a": "Alexander Fleming", "d": 5},
    {"q": "Welcher Künstler schuf die Holzschnitte '36 Ansichten des Fuji'?", "a": "Hokusai", "d": 5},
    {"q": "Wie heißt die erste Frau im Weltall?", "a": "Valentina Tereschkowa", "d": 5},
    {"q": "Welcher Mythos beinhaltet die Weltesche Yggdrasil?", "a": "Nordische Mythologie", "d": 5},
    {"q": "Wie heißt die älteste Universität der Welt?", "a": "al-Qarawīyīn (Marokko)", "d": 5},
    {"q": "Welche antike Stadt wurde 79 n. Chr. durch einen Ausbruch verschüttet?", "a": "Pompeji", "d": 5},
    {"q": "Welcher Planet hat den höchsten Berg im Sonnensystem?", "a": "Mars (Olympus Mons)", "d": 5},

    {"q": "Wie heißt das heilige Buch des Jainismus?", "a": "Agamas", "d": 5},
    {"q": "Welcher Maler schuf die 'Apokalypse'-Holzschnitte?", "a": "Albrecht Dürer", "d": 5},
    {"q": "Wie heißt die erste künstliche radioaktive Substanz?", "a": "Radium", "d": 5},
    {"q": "Wie heißt der größte jemals lebende Hai?", "a": "Megalodon", "d": 5},
    {"q": "Welcher römische Dichter schrieb die 'Metamorphosen'?", "a": "Ovid", "d": 5},
    {"q": "Wie heißt der erste Mensch, der den Südpol erreichte?", "a": "Roald Amundsen", "d": 5},
    {"q": "Wie heißt die griechische Muse der Geschichte?", "a": "Klio", "d": 5},
    {"q": "Welche DNA-Struktur hat Telomerase?", "a": "Reverse Transkriptase", "d": 5},
    {"q": "Welcher indische Text ist das längste Epos der Welt?", "a": "Mahabharata", "d": 5},
    {"q": "Welche Kultur errichtete Göbekli Tepe?", "a": "Präkeramische Jungsteinzeitkulturen", "d": 5},

    {"q": "Wie heißt das stärkste bekannte Material biologischen Ursprungs?", "a": "Spinnenseide", "d": 5},
    {"q": "Wie heißt der größte aktive Vulkan der Erde?", "a": "Mauna Loa", "d": 5},
    {"q": "Welche Kultur entwickelte den ersten bekannten Kalender?", "a": "Sumerer", "d": 5},
    {"q": "Welche Sprache besitzt die längsten Wörter?", "a": "Finnisch/Deutsch (abhängig von Komposita)", "d": 5},
    {"q": "Welcher Entdecker kartografierte als Erster Australien?", "a": "Willem Janszoon", "d": 5},
    {"q": "Welcher Philosoph prägte den Begriff 'Tabula Rasa'?", "a": "John Locke", "d": 5},
    {"q": "Wie heißt der älteste bekannte Name eines Individuums?", "a": "Kushim", "d": 5},
    {"q": "Welches ist das kleinste Säugetier der Welt?", "a": "Hummelfledermaus", "d": 5},
    {"q": "Wie heißt die Schrift der Maya?", "a": "Maya-Glyphen", "d": 5},
    {"q": "Wie heißt das bisher einzige bekannte Ozeanplanet-Kandidatensystem?", "a": "Kepler-22b", "d": 5}
];

const bluffTexts = ["Atme tief durch.", "Keine Emotionen zeigen.", "Guck sie einfach an.", "Tu so als wäre es leicht."];

let players = [], usedQ = [], curQ = null, curIdx = 0, currentRound = 1;
let cheated = false, config = {}, suspectsIndices = [];

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

window.addP = function() {
    const input = document.getElementById('p-input');
    if(input.value.trim()) {
        players.push({name: input.value.trim(), score: 0});
        input.value = '';
        renderPlayerList();
    }
}

function renderPlayerList() {
    document.getElementById('config-player-list').innerHTML = players.map((p, i) =>
        `<div class="entry">
            <span>👤 ${p.name}</span>
            <span style="color:var(--error);cursor:pointer;font-weight:bold;padding:5px;" onclick="players.splice(${i},1);renderPlayerList()">×</span>
        </div>`).join('');
}

window.startActualGame = function() {
    if(players.length < 2) return alert("Füge mindestens 2 Spieler hinzu!");
    config = {
        mode: document.getElementById('game-mode').value,
        limit: parseInt(document.getElementById('game-limit').value),
        diff: parseInt(document.getElementById('diff-select').value)
    };
    curIdx = 0;
    currentRound = 1;
    usedQ = [];
    nextStep();
}

function nextStep() {
    let possible = questionPool.filter(q => q.d == config.diff && !usedQ.includes(q.q));
    if(!possible.length) { usedQ = []; possible = questionPool.filter(q => q.d == config.diff); }

    curQ = possible[Math.floor(Math.random()*possible.length)];
    usedQ.push(curQ.q);

    showScreen('game-handover');
    document.getElementById('h-target').innerText = players[curIdx].name;
}

window.runTurn = function() {
    showScreen('game-question');
    cheated = false;

    document.getElementById('q-text').innerText = curQ.q;
    document.getElementById('secret-info').style.display = 'none';

    const actionBox = document.getElementById('game-actions');
    actionBox.style.display = 'flex'; // Sicherstellen, dass Buttons wieder da sind
    actionBox.innerHTML = `
        <button class="btn btn-outline" onclick="actCheat()">🎭 CHEATEN</button>
        <button class="btn btn-outline" onclick="actEhrlich()">😇 EHRLICH BLEIBEN</button>
    `;
}

window.actCheat = function() {
    cheated = true;
    document.getElementById('a-secret').innerText = "Lösung: " + curQ.a;
    document.getElementById('game-actions').style.display = 'none';
    document.getElementById('secret-info').style.display = 'block';
}

window.actEhrlich = function() {
    cheated = false;
    document.getElementById('a-secret').innerText = bluffTexts[Math.floor(Math.random()*bluffTexts.length)];
    document.getElementById('game-actions').style.display = 'none';
    document.getElementById('secret-info').style.display = 'block';
}

window.confirmSecret = function() {
    showScreen('game-suspect');
    const l = document.getElementById('sus-list');
    l.innerHTML = '';

    players.forEach((p, i) => {
        if(i !== curIdx) {
            const d = document.createElement('div');
            d.className = 'btn btn-outline';
            d.style.justifyContent = 'flex-start';
            d.innerText = "👤 " + p.name;
            d.onclick = () => d.classList.toggle('selected-item');
            l.appendChild(d);
        }
    });
}

window.goVerify = function() {
    suspectsIndices = [];
    document.querySelectorAll('.selected-item').forEach(item => {
        const name = item.innerText.replace("👤 ", "");
        const idx = players.findIndex(p => p.name === name);
        suspectsIndices.push(idx);
    });

    showScreen('game-verify');
    document.getElementById('a-verify').innerText = curQ.a;
}

window.finalize = function(wasRichtig) {
    let diffs = players.map(() => 0);

    if (!cheated) {
        if (wasRichtig) {
            diffs[curIdx] += 3;
            diffs[curIdx] += suspectsIndices.length;
            suspectsIndices.forEach(idx => diffs[idx] -= 1);
        } else {
            diffs[curIdx] -= 3;
        }
    } else {
        if (suspectsIndices.length === 0) {
            diffs[curIdx] += 1;
        } else {
            diffs[curIdx] -= (suspectsIndices.length * 2);
            suspectsIndices.forEach(idx => diffs[idx] += 1);
        }
    }

    players.forEach((p, i) => p.score += diffs[i]);

    showScreen('game-result');
    document.getElementById('res-msg').innerHTML = (cheated && suspectsIndices.length > 0) ?
        "<span style='color:var(--error)'>ERWISCHT! 🎭</span>" : "Runde beendet!";

    document.getElementById('res-list').innerHTML = players.map((p, i) => `
        <div class='entry'>
            <span>${p.name}</span>
            <span style="font-weight:bold">${diffs[i]>=0?'+':''}${diffs[i]} (${p.score} Pkt)</span>
        </div>`).join('');
}

window.nextRoundCheck = function() {
    curIdx = (curIdx + 1) % players.length;
    if (curIdx === 0) currentRound++;

    let isOver = (config.mode === 'rounds' && currentRound > config.limit) ||
        (config.mode === 'points' && players.some(p => p.score >= config.limit));

    if(isOver) {
        const winner = [...players].sort((a,b) => b.score - a.score)[0];
        alert("SPIEL ENDE! Sieger: " + winner.name + " mit " + winner.score + " Punkten.");
        location.reload();
    } else {
        nextStep();
    }
}
