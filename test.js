const fs = require('fs');

// Pfad zur 3D JSON-Datei
const filePath = './ladder.json';

// Datei lesen
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Fehler beim Lesen der Datei:', err);
        return;
    }

    try {
        // JSON parsen
        const jsonData = JSON.parse(data);

        // Attribute und Indices anzeigen
        console.log('Attributes:', jsonData.attributes);
        console.log('Indices:', jsonData.indices);

        // Vertex Positionen ausgeben
        if (jsonData.Vertex_Position) {
            console.log('Vertex Positionen:', jsonData.Vertex_Position.buffer);
        }

        // Vertex Normalen ausgeben
        if (jsonData.Vertex_Normal) {
            console.log('Vertex Normalen:', jsonData.Vertex_Normal.buffer);
        }

        // Vertex Farben ausgeben
        if (jsonData.Vertex_Color) {
            console.log('Vertex Farben:', jsonData.Vertex_Color.buffer);
        }

    } catch (error) {
        console.error('Fehler beim Parsen der JSON-Datei:', error);
    }
});
