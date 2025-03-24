import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Modal, Box, Rating } from '@mui/material';
import { motion } from 'framer-motion';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function ExCard({ ex }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleImageError = (e) => {
    console.error(`Ошибка загрузки фото для ${ex.name}:`, e.target.src);
  };

  const handleImageLoad = (e) => {
    console.log(`Фото успешно загружено для ${ex.name}:`, e.target.src);
  };

  // Преобразуем оценку из строки "X/10" в число
  const getRating = () => {
    const ratingMatch = ex.rate.match(/(\d+)\/10/);
    return ratingMatch ? parseInt(ratingMatch[1]) : 0;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card 
          sx={{ 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            cursor: 'pointer'
          }}
          onClick={handleOpen}
        >
          <Box sx={{ position: 'relative', paddingTop: '100%', width: '100%' }}>
            <CardMedia
              component="img"
              image={ex.photo}
              alt={ex.name}
              onError={handleImageError}
              onLoad={handleImageLoad}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </Box>
          <CardContent 
            sx={{ 
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              p: 2
            }}
          >
            <Typography 
              variant="h5" 
              component="h2" 
              sx={{ mb: 1 }}
            >
              {ex.name}
            </Typography>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ mb: 1 }}
            >
              {ex.period}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                mb: 2,
                flex: 1
              }}
            >
              {ex.description}
            </Typography>
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1,
                pt: 1,
                borderTop: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              <Typography variant="body2">Оценка:</Typography>
              <Rating 
                value={getRating()} 
                readOnly 
                max={10}
                sx={{ 
                  '& .MuiRating-icon': {
                    fontSize: '1rem'
                  }
                }}
              />
              <Typography variant="body2">({ex.rate})</Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            {ex.name}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {ex.description}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <strong>Период:</strong> {ex.period}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography>
              <strong>Оценка:</strong>
            </Typography>
            <Rating 
              value={getRating()} 
              readOnly 
              max={10}
              sx={{ 
                '& .MuiRating-icon': {
                  fontSize: '1rem'
                }
              }}
            />
            <Typography>({ex.rate})</Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default ExCard; 