import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Card } from 'react-native-paper';

export default function App() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // TODO: Call backend /login endpoint
    console.log('Login pressed');
  };

  const handleCreateWallet = () => {
    // TODO: Call backend /wallet/create endpoint
    console.log('Create wallet pressed');
  };

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Card style={{ marginBottom: 16 }}>
            <Card.Title title="SafePlay Wallet" subtitle="Secure cross-chain smart wallet" />
            <Card.Content>
              <Text style={{ marginBottom: 8 }}>
                Welcome! Sign in to manage your family wallets and gaming payments.
              </Text>
              <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={{ marginBottom: 12 }}
              />
              <TextInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ marginBottom: 12 }}
              />
              <Button mode="contained" onPress={handleLogin} style={{ marginBottom: 12 }}>
                Login
              </Button>
              <Button mode="outlined" onPress={handleCreateWallet}>
                Create Wallet
              </Button>
            </Card.Content>
          </Card>

          <Card style={{ marginBottom: 16 }}>
            <Card.Title title="Dashboard" subtitle="Balances and quick actions" />
            <Card.Content>
              <Text>Balances will appear here once connected to backend.</Text>
            </Card.Content>
          </Card>

          <Card>
            <Card.Title title="Send Payment" subtitle="Initiate transfers" />
            <Card.Content>
              <Button mode="contained" onPress={() => console.log('Send payment pressed')}>
                Send Payment
              </Button>
            </Card.Content>
          </Card>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  );
}