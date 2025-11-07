// Estado de las entradas/tickets
export const TicketStatus = {
  AVAILABLE: 'AVAILABLE',
  IN_ESCROW: 'IN_ESCROW',
  SOLD: 'SOLD',
  CANCELLED: 'CANCELLED',
  EXPIRED: 'EXPIRED',
} as const;

export type TicketStatus = typeof TicketStatus[keyof typeof TicketStatus];

// Estado de las transacciones
export const TransactionStatus = {
  PENDING: 'PENDING',                 // Esperando pago del comprador
  PAYMENT_RECEIVED: 'PAYMENT_RECEIVED', // Pago recibido, en escrow
  IN_ESCROW: 'IN_ESCROW',             // Fondos en escrow, esperando confirmación
  COMPLETED: 'COMPLETED',             // Transacción completada, fondos liberados al vendedor
  CANCELLED: 'CANCELLED',             // Transacción cancelada
  REFUNDED: 'REFUNDED',               // Reembolsado al comprador
  DISPUTED: 'DISPUTED',               // En disputa
} as const;

export type TransactionStatus = typeof TransactionStatus[keyof typeof TransactionStatus];
