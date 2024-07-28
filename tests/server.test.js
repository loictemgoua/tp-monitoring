const request = require('supertest');
const { server, app } = require('../server');  // Assurez-vous que ces exportations sont correctes dans votre fichier serveur
const { afterAll, describe, it } = require('@jest/globals');

afterAll(() => {
    server.close();
});

describe('GET /AllTacheWithUser', () =>  {
    it('should return a list of all users with taches', async () => {
        const response = await request(app).get('/AllTacheWithUser');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([

            {
                'id': 2,
                'titre': 'Acheter des fruits',
                'description': 'Acheter des fruits pour le mois.',
                'date_creation': '2024-07-26T10:00:00Z',
                'date_echeance': '2024-07-28T10:00:00Z',
                'statut': 'à faire',
                'nom': 'Doe',
                'prenom': 'John'
            },
            {
                'id': 3,
                'titre': 'Réserver des billets',
                'description': 'Réserver des billets pour le concert de ce soir.',
                'date_creation': '2024-07-26T11:00:00Z',
                'date_echeance': '2024-07-26T18:00:00Z',
                'statut': 'à faire',
                'nom': 'temgoua',
                'prenom': 'loic'
            },
            {
                'id': 4,
                'titre': 'Envoyer les invitations',
                'description': 'Envoyer les invitations pour la fête d\'anniversaire.',
                'date_creation': '2024-07-25T15:00:00Z',
                'date_echeance': '2024-07-27T15:00:00Z',
                'statut': 'terminé',
                'nom': 'temgoua',
                'prenom': 'loic'
            },
            {
                'id': 5,
                'titre': 'Planifier la réunion',
                'description': 'Planifier la réunion de l\'équipe pour la semaine prochaine.',
                'date_creation': '2024-07-26T08:00:00Z',
                'date_echeance': '2024-07-29T08:00:00Z',
                'statut': 'à faire',
                'nom': 'Doe',
                'prenom': 'John'
            },
            {
                'id': 6,
                'titre': 'Faire le ménage',
                'description': 'Faire le ménage de la maison.',
                'date_creation': '2024-07-27T14:00:00Z',
                'date_echeance': '2024-07-28T14:00:00Z',
                'statut': 'en cours',
                'nom': 'Doe',
                'prenom': 'John'
            },
            {
                'id': 7,
                'titre': 'Mettre à jour le site web',
                'description': 'Mettre à jour les informations sur le site web de l\'entreprise.',
                'date_creation': '2024-07-26T13:00:00Z',
                'date_echeance': '2024-07-29T13:00:00Z',
                'statut': 'terminé',
                'nom': 'Smith',
                'prenom': 'Jane'
            },
            {
                'id': 8,
                'titre': 'Acheter du café',
                'description': 'Acheter du café pour le bureau.',
                'date_creation': '2024-07-26T16:00:00Z',
                'date_echeance': '2024-07-27T16:00:00Z',
                'statut': 'à faire',
                'nom': 'Brown',
                'prenom': 'Michael'
            },
            {
                'id': 9,
                'titre': 'laver les assiete',
                'description': 'lorem ipsum dolores et accusamus ',
                'date_creation': '2024-07-26T10:00:00Z',
                'date_echeance': '2024-07-28T10:00:00Z',
                'statut': 'à faire',
                'nom': 'Taylor',
                'prenom': 'Emily'
            }



        ]);
    });
});

describe('GET /allUser', () => {
    it('should return a list of all users', async () => {
        const response = await request(app).get('/allUser');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                'id': 2,
                'nom': 'temgoua',
                'prenom': 'loic'
            },
            {
                'id': 3,
                'nom': 'guest',
                'prenom': 'julie'
            },
            {
                'id': 4,
                'nom': 'nicole',
                'prenom': 'dada'
            },
            {
                'id': 5,
                'nom': 'exo',
                'prenom': 'jack'
            },
            {
                'id': 6,
                'nom': 'swift',
                'prenom': 'charlot'
            },
            {
                'id': 7,
                'nom': 'test',
                'prenom': 'dhdjd'
            },
            {
                'id': 8,
                'nom': 'jddi',
                'prenom': 'yve'
            },
            {
                'id': 9,
                'nom': 'julio',
                'prenom': 'passy'
            },
            {
                'id': 14,
                'nom': 'unive',
                'prenom': 'goog'
            },
            {
                'id': 15,
                'nom': 'serge',
                'prenom': 'dinero',
            }
        ]);
    });
});
describe('POST /createUser', () => {
    it('should create a new user', async () => {
        const newUser = { nom: 'serge', prenom: 'dinero' };
        const response = await request(app)
            .post('/createUser')
            .send(newUser);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining(newUser));
    });
});

describe('POST /createTache', () => {
    it('should create a new task', async () => {
        const newTache = {
            titre: 'laver les assiete',
            description: 'lorem ipsum dolores et accusamus ',
            date_creation: '2024-07-26T10:00:00Z',
            date_echeance: '2024-07-28T10:00:00Z',
            statut: 'à faire',
            utilisateur_id: 6
        };
        const response = await request(app)
            .post('/createTache')
            .send(newTache);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(expect.objectContaining(newTache));

    });
});