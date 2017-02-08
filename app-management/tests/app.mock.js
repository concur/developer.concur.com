export default function appFactory(id) {
  return {
    id,
    certified: false,
    name: 'Starbucks',
    redirectUris: [
      'http://localhost:3000',
      'http://www.concur.com'
    ],
    owner: 'someidoftheowner',
    allowedScopes: [
      'receipts.read',
      'receipts.write'
    ],
    enabled: true,
    appType: 'Business',
    allowedGrants: [
      'implicit',
      'authorization_code',
    ],
    description: 'This is my app.',
  };
}
