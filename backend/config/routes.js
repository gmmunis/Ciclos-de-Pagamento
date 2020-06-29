const express = require('express');

module.exports = function(server) {

  // API Routes
  const router = express.Router();
  server.use('/api', router);

  // rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService');
  billingCycleService.register(router, '/billingCycles');

  const billingSumaryService = require('../api/billingSumary/billingSumaryService');
  router.route('/billingSumary').get(billingSumaryService.getSummary);
}