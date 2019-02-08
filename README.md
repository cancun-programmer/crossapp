# CrossApp

Backend para sistema manejador de membresias

## Getting Started

Endpoints
```
Users
Get -  api/getUsers - Devuelve todos los usuarios con acceso al sistema
Post - api/saveUser  - Guarda un usuario
Post - api/signIn - Login del sistema validado por usuario y contraseña

Members
Get - api/getMembers - Devuelve todos los Members dados de alta
Post - api/saveMember - Alta de nuevo Member
Put - api/memberUpdate/:id - Actualiza un Member ya existente

Memberships
Get - api/membershipsByMember/:id - Devuelve todos las Membresías de un miembro
Post - api/membershipSave - Alta de nueva membresia
Put - api/membershipUpdate/:id - Actualiza una membresía ya existente
```