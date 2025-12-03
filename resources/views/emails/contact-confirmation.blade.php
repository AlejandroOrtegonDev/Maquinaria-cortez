<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gracias por contactarnos</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #0b3b88 0%, #052b63 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #fff; margin: 0;">¡Gracias por contactarnos!</h1>
    </div>
    
    <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
        <p>Hola <strong>{{ $name }}</strong>,</p>
        
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo lo antes posible.</p>
        
        <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0b3b88;">
            <p style="margin: 0;"><strong>Resumen de tu consulta:</strong></p>
            <p style="margin: 5px 0;"><strong>Asunto:</strong> {{ $subject }}</p>
        </div>
        
        <p>Mientras tanto, puedes contactarnos directamente:</p>
        <ul style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <li><strong>WhatsApp:</strong> +57 300 123 4567</li>
            <li><strong>Teléfono:</strong> +57 300 123 4567</li>
            <li><strong>Email:</strong> maquinariaaracortes@gmail.com</li>
            <li><strong>Dirección:</strong> Calle 37 Sur #72A-03 · Barrio Carvajal · Bogotá</li>
        </ul>
        
        <p style="margin-bottom: 0;">Saludos cordiales,<br>
        <strong>Equipo de Maquinaria Cortes CQ SAS</strong></p>
    </div>
</body>
</html>

