var supertest = require('supertest');
global.request = supertest(app);
