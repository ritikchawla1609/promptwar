import app from '../server/server.js';
import http from 'http';

async function run() {
  console.log('🧪 Testing Server Reset Round API Endpoint...');

  const server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const baseUrl = `http://127.0.0.1:${port}`;

  try {
    // 1. Test RESET_STATE for ROUND_1
    console.log('  Testing POST /api/arena/reset-round (RESET_STATE for ROUND_1)...');
    const res1 = await fetch(`${baseUrl}/api/arena/reset-round`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roundId: 'ROUND_1', mode: 'RESET_STATE' }),
    });
    const data1 = await res1.json();
    if (res1.ok && data1.success) {
      console.log('  ✅ PASS: RESET_STATE succeeded');
    } else {
      throw new Error(`RESET_STATE failed: ${JSON.stringify(data1)}`);
    }

    // 2. Test RESET_RESULTS for ROUND_1
    console.log('  Testing POST /api/arena/reset-round (RESET_RESULTS for ROUND_1)...');
    const res2 = await fetch(`${baseUrl}/api/arena/reset-round`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ roundId: 'ROUND_1', mode: 'RESET_RESULTS' }),
    });
    const data2 = await res2.json();
    if (res2.ok && data2.success) {
      console.log('  ✅ PASS: RESET_RESULTS succeeded');
    } else {
      throw new Error(`RESET_RESULTS failed: ${JSON.stringify(data2)}`);
    }

    // 3. Test RESET_EVENT
    console.log('  Testing POST /api/arena/reset-round (RESET_EVENT)...');
    const res3 = await fetch(`${baseUrl}/api/arena/reset-round`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ mode: 'RESET_EVENT', clearTeams: false }),
    });
    const data3 = await res3.json();
    if (res3.ok && data3.success) {
      console.log('  ✅ PASS: RESET_EVENT succeeded');
    } else {
      throw new Error(`RESET_EVENT failed: ${JSON.stringify(data3)}`);
    }

    console.log('\n========================================');
    console.log('All Reset API Tests Passed successfully!');
    console.log('========================================\n');
  } finally {
    server.close();
    process.exit(0);
  }
}

run().catch((err) => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
