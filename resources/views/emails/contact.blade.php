<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo mensaje de contacto</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="background: linear-gradient(135deg, #0b3b88 0%, #052b63 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: #fff; margin: 0;">Nuevo mensaje de contacto</h1>
    </div>
    
    <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
        <p style="margin-top: 0;">Has recibido un nuevo mensaje de contacto desde el sitio web:</p>
        
        <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0b3b88;">
            <p><strong>Nombre:</strong> {{ $name }}</p>
            <p><strong>Email:</strong> {{ $email }}</p>
            <p><strong>Teléfono:</strong> {{ $phone }}</p>
            <p><strong>Asunto:</strong> {{ $subject }}</p>
        </div>
        
        <div style="background: #fff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #0b3b88;">Mensaje:</h3>
            <p style="white-space: pre-wrap;">{{ $message }}</p>
        </div>
        
        <p style="margin-bottom: 0; color: #6b7280; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de Maquinaria Cortes CQ SAS.
        </p>
    </div>
</body>
</html>

