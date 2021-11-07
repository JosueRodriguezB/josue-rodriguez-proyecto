import con from '../database/connection.js';

export const getMunicipios = async (req, res) => {
  con.query('SELECT * FROM municipio', [], (err, result) => {
    if (err) {
      console.log('Ocurrio un error al insertar el registro');
      return;
    }

    res.render('municipios', { municipios: result });
  });
};

export const getMunicipio = async (req, res) => {
  con.query(
    'SELECT * FROM municipio WHERE municipio_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log('Ocurrio un error al insertar el registro');
        return;
      }
      console.log(result);
      res.render('editar_municipio', { municipio: result[0] });
    }
  );
};
export const createMunicipio = async (req, res) => {
  const { nombre, municipio_id } = req.body;

  const data = {
    municipio_id: municipio_id,
    nombre: nombre,
  };
  con.query('INSERT INTO municipio SET ?', data, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect('/municipios');
  });
};

export const updateMunicipio = async (req, res) => {
  const { nombre, municipio_id } = req.body;

  con.query(
    'UPDATE municipio SET municipio_id=?,nombre=? WHERE municipio_id = ?',
    [municipio_id, nombre, req.params.id],
    (err, result) => {
      if (err) {
        console.log('Ocurrio un error al actualizar el registro');
        return;
      }
      console.log(result);
      res.redirect('/municipios');
    }
  );
};

export const deleteMunicipio = async (req, res) => {
  const municipio_id = req.params.id;
  con.query(
    'DELETE FROM cliente WHERE municipio_id = ?',
    [municipio_id],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      con.query(
        'DELETE FROM municipio WHERE municipio_id = ?',
        [municipio_id],
        (err, result) => {
          if (err) {
            console.log(err);
            return;
          }

          res.redirect('/municipios');
        }
      );
    }
  );
};
