// Clear Test Data Script: Purges all teams, submissions, and resets arena to initial LOBBY

const API_BASE = 'http://127.0.0.1:5001';

async function clearTestData() {
  console.log('🧹 Clearing all Prompt War tournament test data...');

  try {
    const res = await fetch(`${API_BASE}/api/arena/purge-data`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    if (res.ok && data.success) {
      console.log('✅ Success! Arena completely reset:');
      console.log('   - Registered Teams: 0');
      console.log('   - Submissions: 0');
      console.log('   - Arena Status: LOCKED (HOLDING LOBBY)');
      console.log('   - Active Phase: LOBBY');
    } else {
      console.error('❌ Failed to purge:', data.error);
    }
  } catch (err) {
    console.error('❌ Network error communicating with backend:', err.message);
  }
}

clearTestData();
