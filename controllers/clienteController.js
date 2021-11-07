import con from '../database/connection.js';

export const getClientes = async (req, res) => {
  con.query('SELECT * FROM cliente', [], (err, clientes) => {
    if (err) {
      console.log('Ocurrio un error al insertar el registro');
      return;
    }
    con.query('SELECT * FROM municipio', [], (err, municipios) => {
      if (err) {
        console.log('Ocurrio un error al insertar el registro');
        return;
      }
      console.log(clientes, municipios);
      res.render('clientes', { clientes: clientes, municipios: municipios });
    });
  });
};

export const getCliente = async (req, res) => {
  con.query(
    'SELECT * FROM cliente WHERE cliente_id = ?',
    [req.params.id],
    (err, result) => {
      if (err) {
        console.log('Ocurrio un error al insertar el registro');
        return;
      }
      con.query('SELECT * FROM municipio', [], (err, municipios) => {
        if (err) {
          console.log('Ocurrio un error al insertar el registro');
          return;
        }
        res.render('editar_cliente', {
          cliente: result[0],
          municipios: municipios,
        });
      });
    }
  );
};
export const createCliente = async (req, res) => {
  const { nombre, cliente_id, municipio_id } = req.body;

  const data = {
    cliente_id: cliente_id,
    nombre: nombre,
    municipio_id: municipio_id,
  };
  con.query('INSERT INTO cliente SET ?', data, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    res.redirect('/clientes');
  });
};

export const updateCliente = async (req, res) => {
  console.log(req.body);
  const { nombre, municipio_id } = req.body;

  con.query(
    'UPDATE cliente SET nombre=?, municipio_id=? WHERE cliente_id=?',
    [nombre, municipio_id, req.params.id],
    (err, result) => {
      if (err) {
        console.log('Ocurrio un error al actualizar el registro');
        return;
      }
      console.log(result);
      res.redirect('/clientes');
    }
  );
};

export const deleteCliente = async (req, res) => {
  const cliente_id = +req.params.id;
  con.query(
    'DELETE FROM cliente WHERE cliente_id = ?',
    [cliente_id],
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      res.redirect('/clientes');
    }
  );
};
