<!-- 页脚 -->
<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="title">Contact us</div>
        <ul>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
  padding: 40px 0;
  overflow: hidden;
  color: #FFF;

  .title {
    font-size: 30px;
    text-align: center;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    li {
      a {
        display: inline-block;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: pink;
        margin-right: 100px;
      }

      &:last-child {
        a {
          margin-right: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 1250px) {}

@media screen and (max-width: 850px) {
  .footer {
    padding: 0.4rem 0 0.6rem;

    .title {
      font-size: 0.3rem;
    }

    ul {
      margin-top: 0.2rem;

      li {
        a {
          width: 0.6rem;
          height: 0.6rem;
          margin-right: 0.5rem;
        }
      }
    }
  }
}</style>