<template>
  <div class="container bg-secondary shadow p-4 mb-5 rounded p-4 c-white">
    <h1>Frontend Engineer - Case Study</h1>
    <h5>Aplikasi Pendataan Penduduk Penerimaan Bantuan Covid</h5>
    <form @submit="formSubmit">
      <div class="text-left mb-2">
        <span><b>Nama</b></span>
        <input class="form-control"
        type="text"
        title="minimal 1 Karakter"
        v-model="nama" placeholder="Enter your name" required/>
      </div>
      <div class="text-left mb-2">
        <span><b>NIK</b></span>
        <input class="form-control"
        title="minimal 1 Karakter"
        onkeydown="javascript: return event.keyCode == 69 ? false : true"
        required
        type="number" v-model="nik" placeholder="Enter your NIK" />
      </div>
      <div class="text-left mb-2">
        <span><b>No kk</b></span>
        <input class="form-control"
        title="minimal 1 Karakter"
        onkeydown="javascript: return event.keyCode == 69 ? false : true"
        required
        type="number" v-model="kk" placeholder="Enter your No KK" />
      </div>
      <div class="text-left mb-2">
        <span><b>Upload Foto KTP</b></span>
        <b-form-file
          v-model="fileKTP"
          :state="Boolean(fileKTP)"
          accept="image/jpeg, image/png"
          required
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </div>
      <div class="text-left mb-2">
        <span><b>Upload Foto KK</b></span>
        <b-form-file
          v-model="fileKK"
          :state="Boolean(fileKK)"
          accept="image/jpeg, image/png"
          required
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
        ></b-form-file>
      </div>
      <div class="row">
        <div class="text-left col-7 mb-2">
          <span><b>Alamat</b></span>
          <b-form-textarea
          title="TIdak boleh Lebih dari 255 Karakter"
          pattern=".{0,255}"
          required
          v-model="alamat" placeholder="Enter your address"></b-form-textarea>
        </div>
        <div class="text-left col-4 mb-2">
          <span><b>Umur</b></span>
          <input class="form-control"
          min="25"
          required
          onkeydown="javascript: return event.keyCode == 69 ? false : true"
          type="number" v-model="umur" placeholder="Enter your age" />
        </div>
      </div>
      <div class="row text-left mb-2">
        <div class="col-5 mr-1">
          <span><b>Jenis Kelamin</b></span>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="col-3 mr-1">
          <span><b>RT</b></span>
          <input class="form-control"
          required
          onkeydown="javascript: return event.keyCode == 69 ? false : true"
          v-model="rt" placeholder="Enter your No RT" />
        </div>
        <div class="col-3">
          <span><b>RW</b></span>
          <input class="form-control"
          required
          onkeydown="javascript: return event.keyCode == 69 ? false : true"
          v-model="rw" placeholder="Enter your No RW" />
        </div>
      </div>
      <div class="text-left mb-2">
        <span><b>Penghasilan Sebelum Pandemi</b></span>
        <input class="form-control"
        type="number"
        onkeydown="javascript: return event.keyCode == 69 ? false : true"
        required
        v-model="sebelum" placeholder="Enter your Gaji" />
      </div>
      <div class="text-left mb-2">
        <span><b>Penghasilan Setelah Pandemi</b></span>
        <input class="form-control"
        type="number"
        onkeydown="javascript: return event.keyCode == 69 ? false : true"
        required
        v-model="sesudah" placeholder="Enter your Gaji" />
      </div>
      <div class="text-left mb-2">
        <span><b>Alasan membutuhkan bantuan</b></span>
        <b-form-select
        required
        @change="pilihan"
        v-model="selectedbantuan" :options="optionsbantuan"></b-form-select>
      </div>
      <div class="text-left mb-4" v-if="lainnya">
        <span><b>Lainnya</b></span>
        <input class="form-control"
        required
        type="text"
        v-model="bantuan" placeholder="Enter your lainnya" />
      </div>
      <div class="d-flex justif-content-center text-left">
        <input class="mt-2 mr-2" type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">Saya menyatakan bahwa data yang diisikan <br> adalah benar dan siap mempertanggungjawabkan <br> apabila ditemukan ketidaksesuaian dalam data tersebut.</label>
      </div>
      <button class="btn btn-success" :disabled="isDisabled">Simpan</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      fileKTP: null,
      fileKK: null,
      nama: '',
      nik: '',
      kk: '',
      alamat: '',
      umur: '',
      sebelum: '',
      sesudah: '',
      bantuan: '',
      rt: '',
      rw: '',
      selected: null,
      options: [
        { value: 1, text: 'Laki-laki' },
        { value: 2, text: 'Perempuan' }
      ],
      selectedbantuan: null,
      optionsbantuan: [
        { value: 1, text: 'Kehilangan Pekerjaan' },
        { value: 2, text: 'Kepala keluarga terdampak atau korban Covid' },
        { value: 3, text: 'Tergolong fakir/miskin semenjak sebelum Covid' },
        { value: 4, text: 'Lainnya' }
      ],
      lainnya: false,
      bantuan: '',
      checked: false
    }
  },
  computed: {
  	isDisabled () {
    	return !this.checked;
    }
  },
  methods: {
    pilihan (){
      if (this.selectedbantuan === 4) {
        this.lainnya = true
      } else {
        this.lainnya = false
      }
    },
    formSubmit (e) {
      e.preventDefault()
      console.log('sdfsdfds')
      let bantuan = ''
      if (this.selectedbantuan == 4) {
        bantuan = this.bantuan
      } else {
        bantuan = this.selectedbantuan
      }
      let data = {
        'nama': this.nama,
        'nik': this.nik,
        'kk': this.kk,
        'file1': this.fileKTP,
        'file2':this.fileKK,
        'alamat': this.alamat,
        'umur': this.umur,
        'rt': this.rt,
        'rw': this.rw,
        'jenis': this.selected,
        'bantuan': bantuan,
        'sebelum': this.sebelum,
        'sesudah': this.sesudah
      }
      console.log(data)
      let databaru = Math.random(data)
      if (databaru < 1500) {
        console.log('sukses')
      } else {
        console.log('gagal')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.c-white {
  color: #fff;
}
</style>
