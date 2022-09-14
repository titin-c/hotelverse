import CartContent from "../cart/CartContent";

const CheckOut = () => {
  return (
    <div className="checkout-screen-container">
      <h2>Finalizar compra</h2>
      <div className="checkout-container">
        <div className="checkout-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input type="text" id="name" name="name" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Apellidos:</label>
              <input type="text" id="lastName" name="lastName" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="adress">Dirección:</label>
              <input type="text" id="adress" name="adress" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="cp">Código Postal:</label>
              <input type="text" id="cp" name="cp" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="provincia">Provincia:</label>
              <select required id="provincia" name="provincia" className="form-control">
                <option value="">Elige Provincia</option>
                <option value="Álava/Araba">Álava/Araba</option>
                <option value="Albacete">Albacete</option>
                <option value="Alicante">Alicante</option>
                <option value="Almería">Almería</option>
                <option value="Asturias">Asturias</option>
                <option value="Ávila">Ávila</option>
                <option value="Badajoz">Badajoz</option>
                <option value="Baleares">Baleares</option>
                <option value="Barcelona">Barcelona</option>
                <option value="Burgos">Burgos</option>
                <option value="Cáceres">Cáceres</option>
                <option value="Cádiz">Cádiz</option>
                <option value="Cantabria">Cantabria</option>
                <option value="Castellón">Castellón</option>
                <option value="Ceuta">Ceuta</option>
                <option value="Ciudad Real">Ciudad Real</option>
                <option value="Córdoba">Córdoba</option>
                <option value="Cuenca">Cuenca</option>
                <option value="Gerona/Girona">Gerona/Girona</option>
                <option value="Granada">Granada</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Guipúzcoa/Gipuzkoa">Guipúzcoa/Gipuzkoa</option>
                <option value="Huelva">Huelva</option>
                <option value="Huesca">Huesca</option>
                <option value="Jaén">Jaén</option>
                <option value="La Coruña/A Coruña">La Coruña/A Coruña</option>
                <option value="La Rioja">La Rioja</option>
                <option value="Las Palmas">Las Palmas</option>
                <option value="León">León</option>
                <option value="Lérida/Lleida">Lérida/Lleida</option>
                <option value="Lugo">Lugo</option>
                <option value="Madrid">Madrid</option>
                <option value="Málaga">Málaga</option>
                <option value="Melilla">Melilla</option>
                <option value="Murcia">Murcia</option>
                <option value="Navarra">Navarra</option>
                <option value="Orense/Ourense">Orense/Ourense</option>
                <option value="Palencia">Palencia</option>
                <option value="Pontevedra">Pontevedra</option>
                <option value="Salamanca">Salamanca</option>
                <option value="Segovia">Segovia</option>
                <option value="Sevilla">Sevilla</option>
                <option value="Soria">Soria</option>
                <option value="Tarragona">Tarragona</option>
                <option value="Tenerife">Tenerife</option>
                <option value="Teruel">Teruel</option>
                <option value="Toledo">Toledo</option>
                <option value="Valencia">Valencia</option>
                <option value="Valladolid">Valladolid</option>
                <option value="Vizcaya/Bizkaia">Vizcaya/Bizkaia</option>
                <option value="Zamora">Zamora</option>
                <option value="Zaragoza">Zaragoza</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono:</label>
              <input type="text" id="phone" name="phone" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Correo electrónico:</label>
              <input type="text" id="email" name="email" className="form-control" />
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="checkout-pay" id="tarjeta" value="tarjeta" />
                <label className="form-check-label" for="tarjeta">
                  Pago con tarjeta
                </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="checkout-pay" id="transferencia" value="transferencia" />
                <label className="form-check-label" for="transferencia">
                  Pago con Transferencia
                </label>
            </div>
          </form>
        </div>
        <div className="checkout-cart">
          <h4>Su pedido</h4>
          <CartContent />
        </div>
      </div>

    </div>
  )
}
export default CheckOut;