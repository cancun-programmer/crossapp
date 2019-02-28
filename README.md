# CrossApp

Backend para sistema manejador de membresias

## Getting Started

Endpoints
```
Users
Get -  api/getUsers - Devuelve todos los usuarios con acceso al sistema
Post - api/saveUser  - Guarda un usuario

Login
Post - api/signIn - Login del sistema validado por usuario y contraseña

Members
Get - api/getMembers - Devuelve todos los Members dados de alta
Post - api/saveMember - Alta de nuevo Member
Put - api/memberUpdate/:id - Actualiza un Member ya existente

Memberships
Get - api/getMembershipsByMember/:id - Devuelve todos las Membresías de un miembro
Post - api/saveMembership - Alta de nueva membresia
Put - api/updateMembership/:id - Actualiza una membresía ya existente

Notifications
Get - api/getNotifications - Devuelve todas todas las notificaciones

Payments
Get - api//getPaymentsByMembership/:id - Devuelve todos los pagos de una membresia
Post - api/savePayment - Agrega un nuevo pago
Put - api/updatePayment/:id - Actualiza un pago
```